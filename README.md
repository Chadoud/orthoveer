# Ortho-Eon

A modern B2B website for selling orthodontic manufacturing equipment and consumables (machines, plastics, and material rolls).

## Project Structure

```
Ortho-Eon/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable React components
│       │   ├── forms/     # Form components (ContactForm)
│       │   ├── layout/    # Layout components (Navbar, Footer, PageLayout)
│       │   ├── machines/  # Machine components (MachinePage, MachineHero, etc.)
│       │   ├── materials/ # Materials components (MaterialsPage)
│       │   ├── sections/  # Section components (PageHero, Hero)
│       │   └── ui/        # UI component library (shadcn/ui)
│       ├── config/        # Configuration files
│       │   ├── machines.ts    # Machine data configuration
│       │   ├── materials.ts  # Materials data configuration
│       │   └── routes.tsx    # Route configuration
│       ├── hooks/         # Custom React hooks
│       ├── lib/           # Utility functions and constants
│       │   ├── constants.ts  # Application constants (contact info)
│       │   ├── styles.ts     # Reusable style constants
│       │   ├── cn-utils.ts   # Style utility functions
│       │   ├── design-tokens.ts # Design system tokens
│       │   └── STYLES.md      # Style system documentation
│       └── pages/         # Page components
│           ├── machines/  # Individual machine pages (now 3 lines each!)
│           ├── Home.tsx
│           ├── Machines.tsx
│           ├── PlasticsMaterials.tsx
│           └── Rolls.tsx
├── server/                # Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── static.ts         # Static file serving
│   └── vite.ts           # Vite dev server integration
├── script/                # Build scripts
└── attached_assets/       # Image assets
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Features

- **Machine Pages**: Individual pages for each manufacturing machine
- **Materials Catalog**: Plastics and material rolls with detailed specifications
- **Contact Forms**: Integrated contact forms on all product pages
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Backend**: Express.js
- **Icons**: Lucide React

## Project Organization

### Components

- **Shared Components**: Reusable components in `components/forms/`, `components/layout/`, and `components/machines/`
- **Page Components**: Route-specific pages in `pages/`
- **UI Components**: shadcn/ui components in `components/ui/`

### Configuration

- Routes are centralized in `config/routes.tsx`
- Server configuration in `server/index.ts`

## Development Guidelines

1. **Component Reusability**: Use shared components (`ContactForm`, `MachinePage`, `MaterialsPage`, etc.) instead of duplicating code
2. **Data Configuration**: All product data is centralized in `config/` directory:
   - `machines.ts` - Machine specifications and features
   - `materials.ts` - Plastics and rolls data
3. **Constants**: Contact information and other constants in `lib/constants.ts`
4. **File Organization**: Keep related files together (e.g., machine pages in `pages/machines/`)
5. **Type Safety**: Use TypeScript for all new code
6. **Styling**:
   - **Use the centralized style system** for consistency and maintainability
   - Import style constants from `lib/styles.ts` or use utility functions from `lib/cn-utils.ts`
   - See `client/src/lib/STYLES.md` for complete documentation
   - Prefer style constants over repeating class combinations
   - Use Tailwind CSS utility classes for one-off styles

## Adding New Content

### Adding a New Machine

1. Add machine data to `config/machines.ts`
2. Create a page file in `pages/machines/` (3 lines using `MachinePage` component)
3. Add route to `config/routes.tsx`
4. Add image import mapping in `pages/Machines.tsx` for listing

### Adding New Materials

1. Add material data to `config/materials.ts` (plastics or rolls array)
2. Update the respective page (`PlasticsMaterials.tsx` or `Rolls.tsx`) if needed

### Updating Contact Information

- Edit `lib/constants.ts` - changes will propagate to all pages automatically

## License

MIT
