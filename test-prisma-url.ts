import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("Creating PrismaClient with datasources...");
try {
  const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
  });
  console.log("Success! datasourceUrl");
} catch (e) {
  console.error("Error creating client datasourceUrl:", e);
}

try {
  const prisma2 = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } }
  });
  console.log("Success! datasources");
} catch (e) {
  console.error("Error creating client datasources:", e);
}
