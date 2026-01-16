/**
 * Generate sitemap.xml automatically from route configurations.
 * This script reads all routes and generates a sitemap.
 */

import { writeFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Base URL for the website (can be overridden via environment variable)
 */
const BASE_URL = process.env.SITE_URL || "https://Orthoveer.com";

/**
 * Static routes with their priorities
 */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/machines", priority: "0.9", changefreq: "weekly" },
  { path: "/plastics-materials", priority: "0.8", changefreq: "monthly" },
  { path: "/rolls", priority: "0.8", changefreq: "monthly" },
  { path: "/solutions", priority: "0.8", changefreq: "weekly" },
  { path: "/white-labeling", priority: "0.8", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/team", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/careers", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/terms-of-service", priority: "0.5", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.5", changefreq: "yearly" },
];

/**
 * Machine IDs (from machines config)
 */
const MACHINE_IDS = [
  "maxtrim-t1",
  "maxtrim-t2",
  "maxform-l2",
  "maxscan-s1",
  "maxmark-m2",
  "maxpolish-i",
  "maxpolish-ii",
  "maxprinter-p1",
  "maxprinter-p2",
];

/**
 * Blog post slugs and dates (from blog config)
 * 
 * NOTE: When adding/removing blog posts, update this array to match
 * the posts in client/src/config/blog.ts
 * 
 * To automate this in the future, consider:
 * - Reading blog.ts file directly
 * - Using a shared JSON config
 * - Generating from a CMS
 */
const BLOG_POSTS = [
  { slug: "the-future-of-clear-aligner-manufacturing", date: "2024-01-15" },
  { slug: "best-practices-for-material-selection", date: "2024-01-10" },
  { slug: "optimizing-your-manufacturing-workflow", date: "2024-01-05" },
  { slug: "understanding-iso-13485-certification", date: "2023-12-28" },
  { slug: "case-study-scaling-production-for-dsos", date: "2023-12-20" },
  { slug: "maintenance-tips-for-thermoforming-equipment", date: "2023-12-15" },
];

/**
 * Generate sitemap.xml content
 */
function generateSitemap(): string {
  const urls: string[] = [];

  // Add all static routes
  for (const route of STATIC_ROUTES) {
    const url = `${BASE_URL}${route.path}`;
    urls.push(`  <url>
    <loc>${url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
  }

  // Add blog post routes
  for (const post of BLOG_POSTS) {
    const url = `${BASE_URL}/blog/${post.slug}`;
    urls.push(`  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${post.date}</lastmod>
  </url>`);
  }

  // Add machine pages
  for (const machineId of MACHINE_IDS) {
    const url = `${BASE_URL}/machines/${machineId}`;
    urls.push(`  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

/**
 * Main function to generate and write sitemap
 */
async function main() {
  try {
    const sitemap = generateSitemap();
    const outputPath = resolve(__dirname, "..", "dist", "public", "sitemap.xml");
    
    await writeFile(outputPath, sitemap, "utf-8");
    const urlCount = sitemap.match(/<url>/g)?.length || 0;
    console.log(`✅ Sitemap generated: ${outputPath}`);
    console.log(`   Base URL: ${BASE_URL}`);
    console.log(`   Total URLs: ${urlCount}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
