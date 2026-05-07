import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import { Link } from "react-router-dom";
import { Calendar, User, ChevronRight } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@/data/blogData";

import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative container mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Blog Grid
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-primary" />
            <span style={{ color: "hsl(0 0% 100% / 0.8)" }}>Blog Grid</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                key={i}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={14} className="text-primary" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <User size={14} className="text-primary" /> {post.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-14">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-md text-sm font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-10 h-10 rounded-md bg-muted text-foreground hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default Blog;
