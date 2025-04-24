// pages/api/dashboard/user-sports.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const adherent = await prisma.adherent.findUnique({
      where: { email },
      include: {
        Adherent_sport: {
          include: {
            Sport: true,
          },
        },
      },
    });

    if (!adherent) {
      return res.status(404).json({ error: "User not found" });
    }

    const sports = adherent.Adherent_sport.map((relation) => ({
      sport: {
        Name: relation.Sport.Name,
      },
      Adherent: {
        nombre_sceance_restantes: adherent.nombre_sceance_restantes,
      },
    }));

    return res.status(200).json(sports);
  } catch (error) {
    console.error("Error fetching user sports:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
