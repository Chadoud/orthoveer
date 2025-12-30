# Style System Documentation

This document describes the centralized style system for better maintainability.

## Overview

The style system consists of:

- **Style Constants** (`lib/styles.ts`) - Reusable class combinations
- **Utility Functions** (`lib/cn-utils.ts`) - Helper functions for combining classes
- **Design Tokens** (`lib/design-tokens.ts`) - Design system tokens
- **CSS Utilities** (`index.css`) - Global utility classes

## Usage

### Style Constants

Import and use style constants directly:

```tsx
import { container, section, card, badge, link, button } from "@/lib/styles";
import { cn } from "@/lib/utils";

// Container
<div className={cn(container)}>
  {/* content */}
</div>

// Section with spacing
<section className={cn(section.base, "bg-secondary/20")}>
  {/* content */}
</section>

// Card variants
<Card className={cn(card.base, "p-6")}>
<Card className={cn(card.hover, "p-6")}>
<Card className={cn(card.glass, "p-6")}>
```

### Utility Functions

Use helper functions for cleaner code:

```tsx
import { containerClass, sectionClass, cardClass } from "@/lib/cn-utils";

// Container
<div className={containerClass()}>
<div className={containerClass("relative", "z-10")}>

// Sections
<section className={sectionClass("base")}>
<section className={sectionClass("large", "bg-secondary/20")}>

// Cards
<Card className={cardClass("base", "p-6")}>
<Card className={cardClass("hover", "p-8")}>
```

### Available Constants

#### Container

- `container` - Standard container: `"container mx-auto px-6"`

#### Sections

- `section.base` - `"py-20"`
- `section.large` - `"py-24"`
- `section.small` - `"py-12"`

#### Cards

- `card.base` - `"bg-white/5 border-white/10"`
- `card.hover` - Base + hover effects
- `card.glass` - Glass morphism effect

#### Badges

- `badge.primary` - Primary badge styling
- `badge.dot` - Animated dot indicator

#### Links

- `link.nav` - Navigation link styling
- `link.navMobile` - Mobile navigation link

#### Buttons

- `button.primary` - Primary button (large)
- `button.primarySmall` - Primary button (small)
- `button.ghost` - Ghost button variant

#### Headings

- `heading.h1` - H1 styling
- `heading.h2` - H2 styling
- `heading.h3` - H3 styling

#### Text

- `text.description` - Description text
- `text.body` - Body text
- `text.muted` - Muted text
- `text.small` - Small text

#### Gradients

- `gradient.textPrimary` - Primary text gradient
- `gradient.overlay` - Background overlay
- `gradient.overlaySide` - Side overlay

## CSS Utility Classes

Global utility classes available in `index.css`:

- `.container-content` - Standard container
- `.section-base`, `.section-large`, `.section-small` - Section spacing
- `.card-base`, `.card-hover` - Card variants
- `.badge-primary` - Badge styling
- `.link-nav` - Navigation links
- `.text-description`, `.text-body`, `.text-muted` - Text variants

## Design Tokens

Access design tokens for programmatic use:

```tsx
import { tokens, dimensions } from "@/lib/design-tokens";

// Spacing
const padding = tokens.spacing.md; // "1rem"

// Opacity
const subtleBg = tokens.opacity.subtle; // "0.05"

// Z-index
const modalZ = tokens.zIndex.modal; // 1050
```

## Migration Guide

### Before

```tsx
<div className="container mx-auto px-6">
<section className="py-20 bg-secondary/20">
<Card className="bg-white/5 border-white/10 p-6">
```

### After

```tsx
import { containerClass, sectionClass, cardClass } from "@/lib/cn-utils";

<div className={containerClass()}>
<section className={sectionClass("base", "bg-secondary/20")}>
<Card className={cardClass("base", "p-6")}>
```

## Benefits

1. **Consistency** - All components use the same spacing and styling
2. **Maintainability** - Change styles in one place, update everywhere
3. **Type Safety** - TypeScript ensures correct usage
4. **Readability** - Semantic names instead of long class strings
5. **Refactoring** - Easy to update design system globally

## Best Practices

1. Use style constants for repeated patterns
2. Combine with `cn()` utility for conditional classes
3. Prefer utility functions over direct constants for cleaner code
4. Document custom variants in component files
5. Keep design tokens for programmatic values (not CSS classes)
