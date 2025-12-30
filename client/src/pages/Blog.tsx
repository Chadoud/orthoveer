import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Link } from "wouter";
import { getAllBlogPosts } from "@/config/blog";
import darkHeroImage from "@assets/hero/dark-hero.png";

const blogPosts = getAllBlogPosts();

export default function Blog() {
  return (
    <PageLayout>
      <PageHero
        badge="Insights & Updates"
        title="Blog"
        description="Stay informed with the latest insights, best practices, and industry updates from the world of orthodontic manufacturing."
        image={darkHeroImage}
        imageAlt="Blog"
      />

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-xs text-primary font-semibold uppercase">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:text-white hover:bg-primary/10"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Have questions about our solutions? Want to schedule a
              demonstration? Contact our team to learn how we can help transform
              your orthodontic practice.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
