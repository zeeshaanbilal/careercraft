import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("Creating PrismaClient without adapter...");
try {
  const prisma = new PrismaClient();
  console.log("Success!");
} catch (e) {
  console.error("Error creating client:", e);
}
