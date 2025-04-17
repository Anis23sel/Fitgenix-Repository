import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient"; // Ensure the client is correctly initialized
import { PrismaClient } from "@prisma/client"; // Initialize Prisma Client


const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Read JSON body
    const body = await req.json();
    console.log("Request body:", body);

    // Validate required fields
    const { nom, prenom, email, password, age, gender, goal, nombre_sceance_restantes, nombre_heures_restantes } = body;
    if (!nom || !prenom || !email || !password || !age || !gender) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email already exists in Supabase
    const { data: existingUser, error: checkError } = await supabase
      .from("Adherent")
      .select("*")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error("Supabase Error checking user:", checkError);
      return NextResponse.json({ error: checkError.message }, { status: 400 });
    }

    if (existingUser) {
      console.error("Email already exists:", existingUser);
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Create user in Supabase Auth system (handles password hashing automatically)
    const { data: signupData, error: signupError } = await supabase.auth.signUp({
      email,
      password, // Supabase handles password hashing
    });

    if (signupError) {
      console.error("Supabase Signup Error:", signupError);
      return NextResponse.json({ error: signupError.message }, { status: 400 });
    }

    console.log("User created in Supabase:", signupData.user);

    // Create a new user in your Prisma database (storing additional user info, but not the plain password)
    try {
      const newUser = await prisma.adherent.create({
        data: {
          nom,
          prenom,
          email,
          age: Number(age), // Ensure it's a number
          gender,
          goal: goal || null, // If goal is not provided, make it null
          nombre_sceance_restantes: Number(nombre_sceance_restantes) || 0, // Ensure it's a number
          nombre_heures_restantes: Number(nombre_heures_restantes) || 0, // Ensure it's a number
          password, // Since Supabase already handles password hashing, no need to hash it manually
        },
      });

      console.log("New user created in Prisma:", newUser);

      return NextResponse.json(
        { message: "User created successfully", user: newUser },
        { status: 201 }
      );
    } catch (error) {
      console.error("Prisma Error creating user:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

  } catch (error) {
    // Catch unexpected errors and return 500 response
    console.error("Signup error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
