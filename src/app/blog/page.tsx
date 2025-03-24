"use client";
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import blogPosts from "@/data/blogPosts";

// Get all unique categories
const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts to display per page
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Calculate pagination values
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Handle page changes
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Reset to page 1 when category or search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-sans">
      <PageHeader />
      
      {/* Blog Header */}
      <section className="w-full bg-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development and the technologies I work with.
          </p>
        </div>
      </section>
      
      {/* Filter and Search */}
      <section className="w-full bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-x-2 mb-4 md:mb-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 flex-wrap mr-3 gap-y-2">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No posts found</h2>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setSelectedCategory("All"); setSearchQuery(""); setCurrentPage(1);}}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
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
                      <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{post.title}</h2>
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex flex-col items-center">
              <div className="text-sm text-gray-500 mb-4">
                Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} posts
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    currentPage === 1 
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                  }`}
                >
                  Previous
                </button>
                
                {/* Generate page number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => {
                  // Show fewer page buttons on mobile
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                  
                  // For desktop: Show first, last, current, and numbers around current page
                  // For mobile: Show fewer numbers to prevent overflow
                  const shouldShowNumber = 
                    number === 1 || 
                    number === totalPages || 
                    number === currentPage ||
                    (number >= currentPage - 1 && number <= currentPage + 1) ||
                    (isMobile && (number === currentPage - 1 || number === currentPage + 1));
                  
                  // Show ellipsis for gaps in number sequence
                  const showLeftEllipsis = number === currentPage - 2 && currentPage > 3;
                  const showRightEllipsis = number === currentPage + 2 && currentPage < totalPages - 2;
                  
                  if (showLeftEllipsis) {
                    return (
                      <span key={`ellipsis-left-${number}`} className="px-2 text-gray-500">...</span>
                    );
                  }
                  
                  if (showRightEllipsis) {
                    return (
                      <span key={`ellipsis-right-${number}`} className="px-2 text-gray-500">...</span>
                    );
                  }
                  
                  if (shouldShowNumber) {
                    return (
                      <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                          currentPage === number
                            ? 'bg-indigo-600 text-white'
                            : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                        }`}
                      >
                        {number}
                      </button>
                    );
                  }
                  
                  return null;
                })}
                
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    currentPage === totalPages 
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="w-full bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to my newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest posts and updates delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <PageFooter />
    </main>
  );
}