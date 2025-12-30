import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft, Clock } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getBlogPostBySlug } from "@/config/blog";
import { NotFound } from "@/pages/not-found";
import labHeroImage from "@assets/hero/lab-hero.png";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  if (!slug) {
    return <NotFound />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <PageLayout>
      <PageHero
        badge={post.category}
        title={post.title}
        description={post.excerpt}
        image={labHeroImage}
        imageAlt={post.title}
      />

      {/* Blog Post Content */}
      <article className="py-20">
        <div className="container mx-auto px-6">
          <div>
            {/* Back Button */}
            <Link href="/blog">
              <Button
                variant="ghost"
                className="mb-8 text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {/* Post Meta */}
            <Card className="bg-white/5 border-white/10 p-6 mb-12">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-semibold text-white">
                    {post.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
            </Card>

            {/* Post Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <Card className="bg-white/5 border-white/10 p-6 mt-12">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">
                Share this article
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Email
                </Button>
              </div>
            </Card>

            {/* Related Posts CTA */}
            <div className="mt-16 text-center">
              <Link href="/blog">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  View All Articles{" "}
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
