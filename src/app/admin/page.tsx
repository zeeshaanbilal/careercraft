import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { getBlogPosts } from "@/actions/blogActions";
import { logout } from "@/actions/adminActions";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const result = await getBlogPosts();
  const posts = result.success && result.data ? result.data : [];

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage your website's content.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/blogs/new" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Plus size={18} />
              Create Post
            </Link>
            <form action={logout}>
              <button 
                type="submit"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-sm"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No blog posts found. Create your first post!
                  </td>
                </tr>
              ) : (
                posts.map((post: any) => (
                  <tr key={post.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900 truncate max-w-xs">{post.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{post.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{post.author}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-3 items-center">
                        <Link href={`/blogs/${post.id}`} target="_blank" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                          View
                        </Link>
                        <Link href={`/admin/blogs/${post.id}/edit`} className="text-indigo-500 hover:text-indigo-600">
                          <Edit size={16} />
                        </Link>
                        <button className="text-red-500 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
