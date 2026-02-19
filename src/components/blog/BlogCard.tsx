import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const category = Array.isArray(post.category) ? post.category[0] : post.category;
  const readTime = `${post.readingTime} min read`;

  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group relative block overflow-hidden rounded-2xl shadow-[var(--shadow-featured)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[400px]">
            <img
              src={post.featuredImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent" />
          </div>

          <div className="flex flex-col justify-center bg-card p-8 md:p-12">
            <Badge variant="secondary" className="mb-4 w-fit bg-primary/10 text-primary">
              {category}
            </Badge>
            <h2 className="mb-3 font-display text-2xl font-bold leading-tight text-card-foreground md:text-3xl">
              {post.title}
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.authorName}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <span>·</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge variant="secondary" className="mb-3 w-fit bg-primary/10 text-primary text-xs">
          {category}
        </Badge>
        <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-card-foreground line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
