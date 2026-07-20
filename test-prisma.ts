import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from "@prisma/client";
import ws from 'ws';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
console.log("Creating PrismaClient...");
try {
  const prisma = new PrismaClient({ adapter });
  console.log("Success!");
} catch (e) {
  console.error("Error creating client:", e);
}
