import { PrismaClient } from "@prisma/client";

declare global {
  // allow global 'let' declaration for PrismaClient so that hot-reloading in development does not create multiple instances
  var prisma: PrismaClient | undefined;
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
