import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Tag, ChevronRight, ChevronLeft, Facebook, Twitter, Linkedin, Play } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@/data/blogData";

import contactHeroBg from "@/assets/contact-hero-bg.jpg";
import commenter1 from "@/assets/commenter-1.jpg";
import commenter2 from "@/assets/commenter-2.jpg";
import inlineImg1 from "@/assets/blog-detail-inline-1.jpg";
import inlineImg2 from "@/assets/blog-detail-inline-2.jpg";

const comments = [
  {
    avatar: commenter1,
    name: "Obila Doe",
    date: "November 24, 2025 - 3:18 pm",
    text: "Our infrastructure management approach is holistic, addressing capacity monitoring, data storage, network utilisation, asset lifecycles, software patching, wired and wireless networking and more.",
  },
  {
    avatar: commenter2,
    name: "James Weighell",
    date: "November 18, 2025 - 2:47 pm",
    text: "A hosted desktop solution allows for the delivery of a consistent and scalable IT experience for all users in an organization. With this solution, users get access via a desktop icon or link.",
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const [commentForm, setCommentForm] = useState({ comment: "", name: "", email: "", website: "", save: false });

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold font-heading text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
        <CTAFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactHeroBg})` }} />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Blog Details
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
            <ChevronRight size={14} className="text-primary" />
            <Link to="/blog" className="text-primary hover:underline font-medium">Blog</Link>
            <ChevronRight size={14} className="text-primary" />
            <span className="text-primary">{post.category}</span>
            <ChevronRight size={14} className="text-primary" />
            <span style={{ color: "hsl(0 0% 100% / 0.8)" }} className="max-w-xs truncate">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img src={post.img} alt={post.title} className="w-full h-auto object-cover" width={800} height={600} />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-primary" /> By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} className="text-primary" /> {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-6">{post.title}</h2>

          {/* Content paragraphs */}
          {post.content.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-5">{p}</p>
          ))}

          {/* Subheading */}
          <h3 className="text-xl font-bold font-heading text-foreground mb-4 mt-8">{post.subheading}</h3>
          {post.subContent.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-5">{p}</p>
          ))}

          {/* Inline images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img src={inlineImg1} alt="Blog media" className="w-full h-48 object-cover" loading="lazy" width={800} height={512} />
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Play size={20} className="text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={inlineImg2} alt="Blog media" className="w-full h-48 object-cover" loading="lazy" width={800} height={512} />
            </div>
          </div>

          {/* Another subheading section */}
          <h3 className="text-xl font-bold font-heading text-foreground mb-4">A Kentucky woman who was accused last year.</h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            The intruders chased the girl in the house and threatened her when she hid from them, according to the PSN University Facebook page. "She came out petrified with her Piggy Bank, HHFF PIGGY BANK hoping that the man would take it and leave her dad alone."
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            The men who are so beguiled & demoralised our power of pleasure is to be welcomed. Rebukes with righteous indignation and dislike men who are so beguiled.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-primary bg-muted/50 rounded-r-lg p-6 my-8">
            <p className="text-foreground font-bold font-heading italic mb-2">{post.quote.text}</p>
            <span className="text-primary text-sm font-semibold">{post.quote.author}</span>
          </blockquote>

          <p className="text-muted-foreground leading-relaxed mb-5">
            The intruders chased the girl in the house and threatened her when she hid from them, according to the PSN University Facebook page.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            "She came out petrified with her Piggy Bank, HHFF PIGGY BANK hoping that the man would take it and leave her dad alone." one outraged officer wrote, especially in capital projects and hire suppliers and consultants that work for you since the value of an outcome like that. As a consultant where fifty plus projects for a large multinational, I realise how very difficult it sometimes can be on the receiving end.
          </p>

          {/* Tags & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-foreground">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-foreground">Share:</span>
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook size={14} style={{ color: "hsl(0 0% 100%)" }} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[hsl(200,90%,50%)] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter size={14} style={{ color: "hsl(0 0% 100%)" }} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[hsl(210,80%,45%)] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Linkedin size={14} style={{ color: "hsl(0 0% 100%)" }} />
              </a>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center sm:justify-between mt-10 pt-8 border-t border-border">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="flex items-center gap-3 group">
                <img src={prevPost.img} alt={prevPost.title} className="w-14 h-14 rounded-lg object-cover" loading="lazy" width={56} height={56} />
                <div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><ChevronLeft size={12} /> PREVIOUS POST</span>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug max-w-[200px]">{prevPost.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="flex items-center gap-3 text-right group">
                <div>
                  <span className="text-xs text-muted-foreground flex items-center justify-end gap-1">NEXT POST <ChevronRight size={12} /></span>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug max-w-[200px]">{nextPost.title}</p>
                </div>
                <img src={nextPost.img} alt={nextPost.title} className="w-14 h-14 rounded-lg object-cover" loading="lazy" width={56} height={56} />
              </Link>
            ) : <div />}
          </div>

          {/* Comments */}
          <div className="mt-14">
            <h3 className="text-xl font-bold font-heading text-foreground mb-8">
              Comments ({comments.length})
            </h3>
            <div className="space-y-8">
              {comments.map((c, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4">
                  <img src={c.avatar} alt={c.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" loading="lazy" width={64} height={64} />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                      <div>
                        <h4 className="font-bold font-heading text-foreground">{c.name}</h4>
                        <span className="text-xs text-primary">{c.date}</span>
                      </div>
                      <button className="px-4 py-1 text-xs font-semibold rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                        Reply
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leave a Comment Form */}
          <div className="mt-14">
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">
              Leave A Comment
            </h3>
            <div className="w-12 h-1 bg-primary rounded mb-8" />
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <textarea
                placeholder="Comment*"
                rows={5}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                value={commentForm.comment}
                onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
              />
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={commentForm.email}
                  onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Website*"
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={commentForm.website}
                  onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-primary"
                  checked={commentForm.save}
                  onChange={(e) => setCommentForm({ ...commentForm, save: e.target.checked })}
                />
                Save my name, email, and website in the browser for the next time I comment.
              </label>
              <button type="submit" className="btn-primary">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default BlogDetail;
