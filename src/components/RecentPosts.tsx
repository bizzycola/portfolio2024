import Link from 'next/link';
import Image from 'next/image';
import blogPosts from "@/data/blogPosts";

// Sample blog posts data - in a real application, this would come from your CMS or API
const recentPosts = blogPosts.slice(0, 3);

export default function RecentPosts() {
  return (
    <section id="blog" className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-600 font-medium mb-2">MY BLOG</span>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Recent Posts</h2>
          <div className="w-20 h-1 bg-indigo-600 mb-4"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            I write about web development, programming tips, and technologies I'm passionate about.
            Check out my latest articles below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.coverImage || "/images/blog/default-cover.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}