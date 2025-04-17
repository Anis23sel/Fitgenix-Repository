"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup/1");
  }, [router]);

  return <p>Redirecting...</p>;
}
