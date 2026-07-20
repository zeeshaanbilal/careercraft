import { getBlogPosts } from "./src/actions/blogActions";
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const result = await getBlogPosts();
  console.log("Result:", result);
}
main();
