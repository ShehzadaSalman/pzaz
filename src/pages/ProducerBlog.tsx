import React, { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ProducerBlogHero from "@/components/producer-blog/ProducerBlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";

const POSTS_PER_PAGE = 6;

const ProducerBlog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const requestedPage = Number(searchParams.get("page") ?? "1");
  const isValidPage = Number.isFinite(requestedPage) && requestedPage >= 1;
  const currentPage = Math.min(isValidPage ? requestedPage : 1, Math.max(totalPages, 1));

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const displayPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    if (nextPage === 1) {
      setSearchParams({});
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSearchParams({ page: String(nextPage) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = (() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
    if (currentPage <= 3) return [1, 2, 3, 4];
    if (currentPage >= totalPages - 2) return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  })();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <PageLayout>
      <ProducerBlogHero activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.publishedAt}
              image={post.featuredImage}
              imageAlt={post.title}
              href={`/blog/${post.slug}`}
              variant="grid"
            />
          ))}
        </div>

        {totalPages >= 1 && (
          <Pagination className="mt-12">
            <PaginationContent className=" bg-white p-2">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    if (currentPage > 1) goToPage(currentPage - 1);
                  }}
                  className={`text-brand-purple hover:text-brand-purple hover:bg-brand-purple/10 ${
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }`}
                />
              </PaginationItem>

              {pageNumbers[0] > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        goToPage(1);
                      }}
                      className="text-brand-purple hover:text-brand-purple hover:bg-brand-purple/10"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </>
              )}

              {pageNumbers.map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={pageNumber === currentPage}
                    onClick={(event) => {
                      event.preventDefault();
                      goToPage(pageNumber);
                    }}
                    className={
                      pageNumber === currentPage
                        ? "border-brand-purple bg-brand-purple hover:text-brand-purple "
                        : "text-brand-purple hover:bg-brand-purple/10 hover:text-brand-purple"
                    }
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        goToPage(totalPages);
                      }}
                      className="text-brand-purple hover:text-brand-purple"
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    if (currentPage < totalPages) goToPage(currentPage + 1);
                  }}
                  className={`text-brand-purple hover:bg-brand-purple/10 hover:text-brand-purple ${
                    currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </section>
    </PageLayout>
  );
};

export default ProducerBlog;
