"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL!;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export async function createBlogPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const readTime = formData.get("readTime") as string;
    const image = formData.get("image") as string;
    const gradient = formData.get("gradient") as string || "from-primary/20 to-accent-purple/20";
    
    // Auto-generate date string (e.g., "Oct 12, 2024")
    const dateObj = new Date();
    const date = dateObj.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

    if (!title || !excerpt || !content || !category || !author || !readTime || !image) {
      return { success: false, error: "All fields are required" };
    }

    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        excerpt,
        content,
        category,
        author,
        date,
        readTime,
        image,
        gradient,
      },
    });

    revalidatePath("/blogs");
    revalidatePath("/");
    
    return { success: true, data: blogPost };
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    return { success: false, error: error.message || "Failed to create blog post" };
  }
}

export async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: posts };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { success: false, error: "Failed to fetch blog posts" };
  }
}

export async function getBlogPostById(id: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id }
    });
    return { success: true, data: post };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { success: false, error: "Failed to fetch blog post" };
  }
}

export async function seedBlogPosts(posts: any[]) {
  try {
    for (const post of posts) {
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
    }
    return { success: true };
  } catch (error) {
    console.error("Error seeding blog posts:", error);
    return { success: false, error: "Failed to seed blog posts" };
  }
}

export async function updateBlogPost(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const image = formData.get("image") as string;

    if (!title || !excerpt || !content || !category || !author) {
      return { success: false, error: "Missing required fields" };
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        excerpt,
        content,
        category,
        author,
        image: image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      }
    });

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${id}`);
    revalidatePath("/admin/blogs");
    
    return { success: true, data: updatedPost };
  } catch (error) {
    console.error("Error updating blog post:", error);
    return { success: false, error: "Failed to update blog post" };
  }
}
