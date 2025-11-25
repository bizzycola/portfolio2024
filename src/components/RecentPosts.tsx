import Link from 'next/link';
import Image from 'next/image';
import blogPosts from "@/data/blogPosts";
import { useEffect, useState } from 'react';

export default function RecentPosts() {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    const res = await fetch(`https://dev.to/api/articles?username=bizzycola&page=1&per_page=3`)
    const articles = await res.json();

    // get the first 3 articles
    const recentArticles = articles.slice(0, 3).map((article: any) => {
        return {
          title: article.title,
          slug: article.slug,
          date: new Date(article.created_at).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }),
          excerpt: article.description,
          coverImage: article.cover_image,
          category: article.tag_list[0] || 'General',
          url: article.url,
          titleShort: article.title.length > 50 ? article.title.slice(0, 50) + '...' : article.title,
        }
      }
    );
    console.log(recentArticles);

    setPosts(recentArticles);
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-600 font-medium mb-2">MY BLOG</span>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Recent Posts</h2>
          <div className="w-20 h-1 bg-indigo-600 mb-4"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            I write about various development topics and tips as I stumble across them or work them out.
            Check out my latest articles from <a href="https://dev.to/bizzycola">dev.to</a> below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`${post.url}`} key={post.slug} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500">
                  <span className='text-white text-2xl font-bold absolute bottom-0 left-0 p-4 bg-gradient-to-t from-indigo-900 to-transparent w-full'>
                    {post.titleShort}
                  </span>
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
          <Link href="https://dev.to/bizzycola" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}