import { useEffect, useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

const posts = blogPosts.slice(0, 6);

const BlogSection = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, posts.length - visibleCards);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(0, posts.length - visibleCards);
  const handlePrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section id="blog" className="py-20 lg:py-28 bg-section-light/55">
      <div className="container mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-badge mb-4">Blog</span>
            <h2 className="section-title text-foreground">
            Our Latest <span className="gradient-text">Blog</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-card border border-border/70 text-foreground shadow-sm hover:text-primary transition-colors"
              aria-label="Previous blog cards"
            >
              <ChevronLeft size={18} className="mx-auto" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-card border border-border/70 text-foreground shadow-sm hover:text-primary transition-colors"
              aria-label="Next blog cards"
            >
              <ChevronRight size={18} className="mx-auto" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
          >
            {posts.map((post, i) => (
              <div key={i} className="shrink-0 px-2" style={{ width: `${100 / visibleCards}%` }}>
                <article className="group rounded-2xl border border-border/70 bg-card p-3 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative rounded-xl overflow-hidden mb-5">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="px-2 pb-2">
                    <div className="flex items-center gap-5 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User size={14} /> {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
