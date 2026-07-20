import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from "@prisma/client";
import { BLOG_POSTS } from "./src/data/blogs";
import ws from 'ws';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database with initial blogs...");
  
  for (const post of BLOG_POSTS) {
    await prisma.blogPost.create({
      data: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        author: post.author,
        date: post.date,
        readTime: post.readTime,
        image: post.image,
        gradient: post.gradient,
      }
    });
    console.log(`Created: ${post.title}`);
  }
  
  console.log("Seeding finished.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
