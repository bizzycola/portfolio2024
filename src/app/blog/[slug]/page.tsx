"use client";
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blogPosts";

// This would typically come from your CMS or database

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);

  // If no post is found or the page is still loading the slug
  if (!post || !slug) {
    return (
      <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
        <PageHeader />
        <div className="w-full max-w-4xl mx-auto py-16 px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Loading post...</h1>
            {!slug ? null : <p className="mt-4">Post not found</p>}
            <Link href="/blog" className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
        <PageFooter />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <PageHeader />

      <article className="w-full">
        {/* Hero section with cover image */}
        <div className="w-full h-96 relative bg-gray-900">
          <Image
            src={post.coverImage || "/images/blog/default-cover.jpg"}
            alt={post.title}
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="max-w-4xl w-full">
              <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
              <div className="flex items-center text-gray-300">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />

          {/* Post navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link href="/blog" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4 sm:mb-0">
                ← Back to Blog
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share this post:</span>
                <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(`https://lchant.dev/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://lchant.dev/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.slug !== post.slug)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage || "/images/blog/default-cover.jpg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-medium text-indigo-600 uppercase">{relatedPost.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-indigo-600 transition-colors">{relatedPost.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <PageFooter />
    </main>
  );
}