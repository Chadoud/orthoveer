# OrthoVeer

> A modern B2B website for selling orthodontic manufacturing equipment and consumables (production equipment, plastics, and material rolls), along with white-label manufacturing services.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.9-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Architecture & Context](#architecture--context) 🤖
- [Development](#development)
- [Adding Content](#adding-content)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation & Run

```bash
# Clone the repository
git clone <repository-url>
cd OrthoVeer

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at **http://localhost:3000**

### Available Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start development server with HMR                |
| `npm run dev:client`   | Run only Vite dev server (client-only)           |
| `npm run build`        | Build for production (client + server + sitemap) |
| `npm run build:client` | Build only client (for static hosting)           |
| `npm run start`        | Start production server                          |
| `npm run check`        | Run TypeScript type checking                     |

## ✨ Features

### Core Features

- 🏭 **9 Production Equipment Pages** - Individual pages for each manufacturing machine with detailed specs
- 📦 **Materials Catalog** - Comprehensive pages for plastics and material rolls
- 🏷️ **White-Label Services** - Dedicated service pages
- 📊 **Solutions Overview** - Complete manufacturing solutions with production models
- 📝 **Blog System** - Blog listing and individual post pages with images
- 📈 **Case Studies** - Success stories with testimonials and statistics
- 👥 **About & Careers** - Company information and job listings
- 📧 **Contact Forms** - Integrated forms with product/service selection and API integration
- ⚖️ **Legal Pages** - Terms of Service, Privacy Policy, and Cookie Policy

### Design & UX

- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- 🎥 **Video Backgrounds** - Hero sections with video backgrounds
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 🎭 **Smooth Animations** - Scroll animations, hover effects, and transitions
- 🔍 **SEO Optimized** - Proper heading hierarchy, meta tags, XML sitemap, and robots.txt
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives
- 🍪 **Cookie Consent & Tracking** - EU/CH-compliant cookie consent system with granular controls and Google Analytics 4 integration (Consent Mode v2)
- 🛡️ **Error Handling** - React Error Boundaries with structured error logging
- 🔄 **API Client** - Centralized API client with retry logic, caching, circuit breaker, and health monitoring

## 🛠 Technology Stack

### Frontend

- **React 19** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 7** - Build tool and dev server
- **Wouter** - Lightweight routing
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Component library (Radix UI)
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icon library

### Backend

- **Express.js** - Web server
- **TypeScript** - Server-side type safety

### Development Tools

- **Vite HMR** - Hot module replacement
- **TypeScript** - Type checking
- **Custom Vite Plugin** - Meta image injection

## 📁 Project Structure

```
OrthoVeer/
├── client/                      # Frontend React application
│   ├── public/                  # Static assets
│   │   ├── favicon.png
│   │   └── opengraph.jpg
│   └── src/
│       ├── components/          # Reusable components
│       │   ├── forms/          # ContactForm, CareerApplicationForm
│       │   ├── layout/         # Navbar, Footer, PageLayout
│       │   ├── machines/       # Machine-specific components
│       │   ├── materials/      # Materials components
│       │   ├── sections/       # PageHero, Hero, ScrollArrow
│       │   └── ui/             # 55+ shadcn/ui components
│       ├── config/             # Configuration files
│       │   ├── machines.ts    # Equipment data
│       │   ├── materials.ts   # Materials data
│       │   ├── blog.ts        # Blog posts
│       │   └── routes.tsx     # Route definitions
│       ├── lib/                # Utilities and libraries
│       │   ├── analytics/     # Analytics and funnel tracking
│       │   ├── api/           # API client, caching, circuit breaker
│       │   ├── consent/       # Cookie consent management
│       │   ├── constants/     # App constants
│       │   ├── errors/        # Error logging and handling
│       │   ├── monitoring/    # Health monitoring
│       │   ├── prefetch/      # Route prefetching
│       │   ├── styles/        # Modular style system
│       │   ├── tracking/      # Google Analytics tracking
│       │   └── utils/         # Helper functions
│       ├── pages/              # Page components
│       │   ├── machines/      # 9 equipment pages
│       │   └── [page].tsx    # Main pages
│       └── types/              # TypeScript definitions
├── server/                      # Express server
│   ├── api/                   # API handlers
│   │   ├── contact.ts        # Contact form handler
│   │   ├── careers.ts       # Career application handler
│   │   └── middleware/     # Rate limiting middleware
│   ├── lib/                  # Server utilities
│   │   └── system/          # System monitoring
│   ├── middleware/          # Express middleware (CSP)
│   ├── index.ts             # Server entry
│   ├── routes.ts            # API routes
│   ├── static.ts            # Static file serving
│   └── vite.ts              # Vite integration
├── attached_assets/            # Images and videos
│   ├── machinesPage/          # Equipment images
│   ├── materials/             # Material images
│   └── [page]/                # Page-specific assets
├── script/                     # Build scripts
│   ├── build.ts               # Production build
│   └── generate-sitemap.ts   # Automatic sitemap generation
├── client/public/              # Public static files
│   ├── robots.txt            # Search engine crawler instructions
│   └── favicon.png
├── netlify.toml               # Netlify config
└── vite.config.ts             # Vite config
```

## 🏗 Architecture & Context

> **🤖 AI Context Section**: This section provides architectural context, design decisions, and domain knowledge to help AI assistants understand the project structure and make informed improvements.

### Architecture Overview

**Architecture Pattern**: Component-based SPA with server-side rendering support

- **Frontend**: React SPA with client-side routing (Wouter)
- **Backend**: Express.js server for static file serving and potential API expansion
- **Build**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom utility classes and modular style system

### Design Patterns & Principles

#### 1. **Configuration-Driven Content**

All content is centralized in `config/` directory to enable non-developer updates:

```typescript
// Why: Content changes don't require component modifications
// Pattern: Data-driven components that render from config
config/machines.ts → MachinePage component → Individual pages
```

**Rationale**:

- Content updates don't require code changes
- Single source of truth for product data
- Easy to extend with CMS integration later

#### 2. **Composition Over Configuration**

Machine pages use a single `MachinePage` component with minimal page files:

```typescript
// Pattern: Composition with shared component
export default function MaxTrimT2() {
  return <MachinePage machineId="maxtrim-t2" />;
}
```

**Rationale**:

- Reduces code duplication (9 machines, ~3 lines each)
- Consistent UI/UX across all equipment pages
- Easy to update all pages by modifying one component

#### 3. **Modular Style System**

Two-layer styling approach:

1. **Style Variants** (`lib/styles/variants.ts`) - Pre-defined component styles
2. **Utility Classes** (`index.css`) - Reusable layout patterns

**Rationale**:

- Scalable and maintainable
- Type-safe styling with TypeScript
- Consistent design language
- Easy to update globally

#### 4. **Path Aliases for Clean Imports**

```typescript
// Why: Avoids relative path hell and improves readability
import { Button } from "@/components/ui/button";
import logo from "@assets/logo/logo.webp";
```

**Rationale**:

- Cleaner imports
- Easier refactoring
- Better IDE autocomplete
- Clear separation of concerns

### Component Architecture

#### Component Hierarchy

```
App
├── TooltipProvider (Context)
├── ScrollToTop (Side effect)
├── Toaster (Notifications)
└── Router
    └── PageLayout (Shared layout)
        ├── Navbar (Fixed, auto-hide on scroll)
        ├── Page Content (Route-specific)
        └── Footer (Static)
```

#### Component Categories

1. **Layout Components** (`components/layout/`)

   - `PageLayout`: Wraps all pages with Navbar/Footer
   - `Navbar`: Auto-hiding, responsive navigation
   - `Footer`: Static footer with links
   - `ScrollToTop`: Scroll restoration on route change

2. **Section Components** (`components/sections/`)

   - `PageHero`: Reusable hero section with badge/title/description
   - `Hero`: Home page specific hero with video background
   - `ScrollArrow`: Scroll indicator with smooth scroll behavior

3. **Feature Components** (`components/machines/`, `components/materials/`)

   - Domain-specific components that encapsulate business logic
   - `MachinePage`: Orchestrates all machine-related components
   - `MaterialsPage`: Handles material type switching (plastics/rolls)

4. **Form Components** (`components/forms/`)
   - `ContactForm`: Multi-step form with conditional fields
   - `CareerApplicationForm`: File upload and validation

### Data Flow

```
User Action
  ↓
Route Change (Wouter)
  ↓
Page Component
  ↓
Feature Component (MachinePage, MaterialsPage)
  ↓
Config Data (machines.ts, materials.ts)
  ↓
UI Components (shadcn/ui)
  ↓
Render
```

### Domain Knowledge: Orthodontic Manufacturing

**Business Context**: B2B platform selling equipment and services to:

- Orthodontic practices (in-house production)
- Dental laboratories (centralized production)
- DSOs (Dental Service Organizations - multi-location)

**Key Terminology**:

- **Clear Aligners**: Transparent orthodontic devices (alternative to braces)
- **Thermoforming**: Process of heating and shaping thermoplastic materials
- **Trimming**: Cutting aligners to precise specifications
- **ISO 13485**: Medical device quality management standard
- **White-Label**: Manufacturing services under client's brand

**Product Categories**:

1. **Production Equipment**: Machines for manufacturing (9 types)
2. **Materials**: Thermoplastic sheets and rolls
3. **Services**: White-label manufacturing

**Why This Matters**:

- Content must use B2B, technical language
- SEO focuses on commercial search intent
- Specifications and certifications are critical
- Case studies demonstrate ROI and scalability

### Technical Decisions & Rationale

#### Why Wouter Instead of React Router?

- **Lightweight**: ~1KB vs ~10KB
- **Simple API**: Matches our routing needs
- **No Context**: Better performance for SPA
- **TypeScript**: Better type inference

#### Why shadcn/ui Instead of Material-UI or Chakra?

- **Copy-paste components**: Full control over code
- **Tailwind CSS**: Matches our styling approach
- **Radix UI primitives**: Accessibility built-in
- **Customizable**: Easy to modify for brand needs

#### Why Vite Instead of Create React App?

- **Faster HMR**: Near-instant updates
- **Better DX**: Modern tooling
- **Smaller bundle**: Better tree-shaking
- **Plugin system**: Custom meta image plugin

#### Why Express.js for Static Serving?

- **Future API expansion**: Easy to add endpoints
- **SSR capability**: Can add server-side rendering later
- **Development integration**: Vite middleware integration
- **Production ready**: Proven, stable

### State Management

**Current Approach**: Local component state + URL state

- **Form state**: React Hook Form (local)
- **Route state**: Wouter (URL-based)
- **UI state**: React useState/useEffect
- **No global state**: No Redux/Zustand needed yet

**Future Considerations**:

- Add state management if sharing data across pages
- Consider React Query for server data
- Context API for theme/user preferences

### Performance Optimizations

1. **Code Splitting**: Route-based (automatic with Wouter)
2. **Image Optimization**: Lazy loading with `loading="lazy"`
3. **Video Optimization**: Autoplay, loop, muted for backgrounds
4. **Bundle Size**: Tree-shaking, minimal dependencies
5. **CSS**: Tailwind purging unused styles

### SEO Strategy

**Approach**: Crawl-first indexing with proper heading hierarchy

- **One H1 per page**: Unique, keyword-rich
- **Semantic HTML**: Proper heading hierarchy (H1-H4)
- **Meta tags**: OpenGraph, Twitter cards
- **XML Sitemap**: Automatically generated during build (30 URLs)
- **robots.txt**: Search engine crawler instructions
- **Structured content**: Clear sections with H2/H3
- **Keyword strategy**: Commercial intent, B2B terminology

**Sitemap Generation:**

- Automatically generated during `npm run build`
- Includes all static pages, blog posts, and machine pages
- Configurable base URL via `SITE_URL` environment variable
- Output: `dist/public/sitemap.xml`

**robots.txt:**

- Located in `client/public/robots.txt`
- Automatically copied to dist during build
- References sitemap location

See `HEADING_HIERARCHY.md` for detailed SEO guidelines.  
See `SITEMAP_ROBOTS_IMPLEMENTATION.md` for sitemap generation details.

### Accessibility

- **Radix UI**: Built-in ARIA attributes
- **Keyboard navigation**: All interactive elements accessible
- **Focus management**: Proper focus indicators
- **Screen readers**: Semantic HTML, alt text
- **Color contrast**: WCAG AA compliant

### Technical Debt & Future Improvements

#### Known Issues

1. **No Loading States**: No skeleton loaders for async content

   - **Action**: Add loading states for better UX
   - **Priority**: Medium

2. **Form Validation**: Server-side validation could be enhanced
   - **Action**: Add more comprehensive server-side validation
   - **Priority**: Low (basic validation already implemented)

#### Future Enhancements

1. **CMS Integration**: Move content to headless CMS
2. **Internationalization**: Multi-language support
3. **Analytics**: User behavior tracking
4. **A/B Testing**: Conversion optimization
5. **Progressive Web App**: Offline support, installable
6. **API Layer**: RESTful API for dynamic content
7. **Search Functionality**: Full-text search for products
8. **User Accounts**: Customer portal for orders/tracking

### Code Conventions

#### Naming Conventions

- **Components**: PascalCase (`MachinePage.tsx`)
- **Files**: Match component name
- **Functions**: camelCase (`getAllBlogPosts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_WIDTH`)
- **Types/Interfaces**: PascalCase (`BlogPost`, `MachineData`)

#### File Organization

- **One component per file**: Easier to find and maintain
- **Co-located styles**: Styles in same directory or `lib/styles/`
- **Index files**: For cleaner imports (`components/layout/index.ts`)

#### TypeScript Guidelines

- **Strict mode**: Enabled for type safety
- **No `any`**: Use `unknown` or proper types
- **Interfaces over types**: For object shapes
- **Type exports**: Export types from config files

### Testing Strategy

**Current State**: No automated tests (technical debt)

**Note**: Test infrastructure (Vitest, Playwright) is not currently set up. The tracking system includes framework-agnostic integration tests in `client/src/lib/tracking/__tests__/`.

**Recommended Approach** (when implementing):

- **Unit tests**: Components, utilities (Vitest)
- **Integration tests**: Form submissions, routing
- **E2E tests**: Critical user flows (Playwright)
- **Visual regression**: Component screenshots

### Security Considerations

1. **Form Validation**: Client + server-side validation implemented
2. **XSS Prevention**: React's built-in escaping
3. **CSRF Protection**: Add tokens for form submissions (future enhancement)
4. **Content Security Policy**: CSP headers implemented
5. **Rate Limiting**: Adaptive rate limiting on API endpoints
6. **Environment Variables**: Never commit secrets

### Environment Variables

### Client (Vite)

| Variable        | Description                                    | Required | Default |
| --------------- | ---------------------------------------------- | -------- | ------- |
| `VITE_GA_ID`    | Google Analytics 4 Measurement ID (e.g., G-XX) | No       | -       |
| `VITE_BASE_URL` | Base URL for API requests                      | No       | `/`     |

**Note:** `VITE_GA_ID` is only used in production mode. Tracking is disabled in development.

### Server (Express)

| Variable   | Description                          | Required | Default       |
| ---------- | ------------------------------------ | -------- | ------------- |
| `PORT`     | Server port                          | No       | `3000`        |
| `HOST`     | Server host                          | No       | `localhost`   |
| `NODE_ENV` | Environment (development/production) | No       | `development` |

## Deployment Architecture

**Current**: Static site generation with Express fallback

**Production Flow**:

```
Source Code
  ↓
npm run build:client
  ↓
Vite bundles React app
  ↓
dist/public/ (static files)
  ↓
Netlify/Vercel serves static files
  ↓
SPA routing (redirect to index.html)
```

**Future**: Could add SSR for better SEO and performance

## 💻 Development

### Development Server

```bash
npm run dev
```

Starts the full-stack development server with:

- Hot Module Replacement (HMR)
- TypeScript compilation
- Express server on port 3000
- Vite dev server integration

### Type Checking

```bash
npm run check
```

Runs TypeScript compiler to check for type errors without building.

### Building for Production

```bash
# Build everything (client + server)
npm run build

# Build only client (for static hosting)
npm run build:client
```

**Build Process:**

1. Compiles TypeScript
2. Builds React app with Vite
3. Generates sitemap.xml automatically
4. Bundles Express server
5. Outputs to `dist/` directory

**Sitemap Generation:**
The sitemap is automatically generated during the build process. It includes:

- All static pages (15 routes)
- All blog posts (6 posts with lastmod dates)
- All machine pages (9 machines)
- Total: 30 URLs

To customize the base URL, set the `SITE_URL` environment variable:

```bash
SITE_URL=https://example.com npm run build
```

### Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { Button } from "@/components/ui/button"; // @/ → client/src/
import logo from "@assets/logo/logo.webp"; // @assets/ → attached_assets/
```

**Available Aliases:**

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Style System

The project uses Tailwind CSS with shadcn/ui components for a modern, accessible UI.

**Component Library:**

- 56+ shadcn/ui components in `client/src/components/ui/`
- Built on Radix UI primitives for accessibility
- Fully customizable with Tailwind CSS

**Utility Classes:**

- `flex-icon-title` - Icon + title flexbox pattern
- `grid-2col`, `grid-3col`, `grid-4col` - Responsive grids
- `link-primary-hover` - Link with hover effect

## 📝 Adding Content

### Adding a New Production Equipment

1. **Add equipment data** to `client/src/config/machines.ts`:

```typescript
export const machines = {
  "new-machine": {
    id: "new-machine",
    name: "New Machine",
    model: "NM-100",
    category: "Trimming",
    // ... specifications, features, parameters
  },
};
```

2. **Create page file** in `client/src/pages/machines/NewMachine.tsx`:

```typescript
import { MachinePage } from "@/components/machines/MachinePage";
import { machines } from "@/config/machines";

export default function NewMachine() {
  return <MachinePage machineId="new-machine" />;
}
```

3. **Add route** to `client/src/config/routes.tsx`:

```typescript
import NewMachine from "@/pages/machines/NewMachine";

export const routes: Route[] = [
  // ... existing routes
  { path: "/machines/new-machine", component: NewMachine },
];
```

4. **Add image** to `attached_assets/machinesPage/new-machine.png`

5. **Update listing** in `client/src/pages/Machines.tsx`:

```typescript
import newMachineImage from "@assets/machinesPage/new-machine.png";

const machineImages: Record<string, string> = {
  // ... existing
  "new-machine": newMachineImage,
};
```

### Adding a Blog Post

1. **Add post data** to `client/src/config/blog.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "new-post",
    slug: "new-blog-post",
    title: "New Blog Post",
    excerpt: "Brief description...",
    author: "Author Name",
    date: "2024-01-20",
    category: "Technology",
    readTime: "5 min read",
    image: techHeroImage, // Import from @assets
    content: ["First paragraph...", "Second paragraph..."],
  },
];
```

2. **Update sitemap** - Add the new post to `script/generate-sitemap.ts`:

```typescript
const BLOG_POSTS = [
  // ... existing posts
  { slug: "new-blog-post", date: "2024-01-20" },
];
```

The blog listing and individual post pages will automatically update. The sitemap will include the new post on the next build.

### Updating Contact Information

Edit `client/src/lib/constants/contact.ts` - changes propagate to all pages automatically.

## 🚢 Deployment

### Netlify

The project includes `netlify.toml` for easy deployment:

```bash
netlify deploy --prod
```

**Configuration:**

- Build command: `npm run build:client`
- Publish directory: `dist/public`
- Node version: 20
- SPA routing: All routes redirect to `/index.html`
- Sitemap: Automatically generated at `dist/public/sitemap.xml`
- robots.txt: Automatically copied from `client/public/robots.txt`

### Other Platforms

For static hosting (Vercel, GitHub Pages, etc.):

1. Build the client: `npm run build:client`
2. Serve the `dist/public` directory
3. Configure SPA routing (redirect all routes to `index.html`)
4. Set `VITE_BASE_URL` environment variable if deploying to a subdirectory

### Environment Variables

#### Client (Vite)

| Variable        | Description                                                   | Required | Default                 |
| --------------- | ------------------------------------------------------------- | -------- | ----------------------- |
| `VITE_GA_ID`    | Google Analytics 4 Measurement ID (e.g., G-XX)                | No       | -                       |
| `VITE_BASE_URL` | Base URL for OpenGraph images                                 | No       | `/`                     |
| `SITE_URL`      | Base URL for sitemap generation (e.g., https://orthoveer.com) | No       | `https://orthoveer.com` |

**Note:**

- `VITE_GA_ID` is only used in production mode. Tracking is disabled in development.
- `SITE_URL` is used during build to generate sitemap.xml with correct absolute URLs.

#### Server (Express)

| Variable   | Description                          | Required | Default       |
| ---------- | ------------------------------------ | -------- | ------------- |
| `PORT`     | Server port                          | No       | `3000`        |
| `HOST`     | Server host                          | No       | `localhost`   |
| `NODE_ENV` | Environment (development/production) | No       | `development` |

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Type Errors

```bash
# Run type checking
npm run check

# Common fixes:
# - Ensure all imports are correct
# - Check TypeScript version matches
# - Restart TypeScript server in IDE
```

### Build Failures

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

### Image Import Issues

Ensure images are in `attached_assets/` and use the `@assets/` alias:

```typescript
// ✅ Correct
import image from "@assets/machinesPage/image.png";

// ❌ Incorrect
import image from "../assets/image.png";
```

### HMR Not Working

1. Check browser console for errors
2. Restart dev server
3. Clear browser cache
4. Check Vite HMR connection in Network tab

## 📚 Documentation

### Internal Documentation

- **[Cookie Consent & Tracking](client/src/lib/tracking/README.md)** - Cookie consent and GA4 tracking system
- **[SEO Guidelines](HEADING_HIERARCHY.md)** - Heading hierarchy and SEO best practices
- **[Sitemap & Robots.txt](SITEMAP_ROBOTS_IMPLEMENTATION.md)** - Automatic sitemap generation and robots.txt configuration

### External Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Wouter Routing](https://github.com/molefrog/wouter)

## 📄 License

MIT

---

**Need Help?** Check the [Troubleshooting](#troubleshooting) section or review the [Documentation](#documentation).
