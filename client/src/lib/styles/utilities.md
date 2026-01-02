# CSS Utility Classes Reference

This document lists all reusable utility classes available in the design system.

## Flex Utilities

### Icon + Title Layouts
- `.flex-icon-title` - Icon and title on same row: `flex items-center gap-4 mb-4`
- `.flex-icon-title-lg` - Icon and title with larger margin: `flex items-center gap-4 mb-6`
- `.flex-icon-title-sm` - Smaller spacing: `flex items-center gap-3 mb-2`
- `.flex-icon-title-sm-md` - Small with medium margin: `flex items-center gap-3 mb-3`

### Inline Flex
- `.flex-inline` - Inline items: `flex items-center gap-2`
- `.flex-inline-md` - Inline with gap-3: `flex items-center gap-3`
- `.flex-inline-lg` - Inline with gap-4: `flex items-center gap-4`
- `.inline-flex-icon` - Inline flex for badges/buttons: `inline-flex items-center gap-2`

### Responsive Flex
- `.flex-responsive` - Column to row: `flex flex-col sm:flex-row gap-4`
- `.flex-responsive-center` - With justify center: `flex flex-col sm:flex-row gap-4 justify-center`

### Space Between
- `.flex-between` - Space between: `flex items-center justify-between`
- `.flex-between-responsive` - Responsive space between: `flex flex-col md:flex-row md:items-start md:justify-between gap-4`

## Grid Utilities

### 2-Column Grids
- `.grid-2col` - 2-column responsive: `grid grid-cols-1 md:grid-cols-2 gap-6`
- `.grid-2col-lg` - 2-column with larger gap: `grid grid-cols-1 md:grid-cols-2 gap-8`

### 3-Column Grids
- `.grid-3col` - 3-column responsive: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- `.grid-3col-lg` - 3-column with larger gap: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

### 4-Column Grids
- `.grid-4col` - 4-column responsive: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`

## Link Utilities

- `.link-primary` - Primary link style: `flex items-center text-primary font-semibold`
- `.link-primary-hover` - With group hover effect: `flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform`
- `.link-primary-hover-sm` - With hover effect: `flex items-center text-primary font-semibold hover:translate-x-2 transition-transform cursor-pointer`

## Usage Examples

```tsx
// Icon + Title
<div className="flex-icon-title">
  <Icon className="w-12 h-12 text-primary shrink-0" />
  <h3>Title</h3>
</div>

// Responsive Grid
<div className="grid-3col-lg">
  {/* cards */}
</div>

// Responsive Flex
<div className="flex-responsive">
  <Button>Primary</Button>
  <Button>Secondary</Button>
</div>

// Link with hover
<div className="link-primary-hover">
  Learn more <ArrowRight />
</div>
```

## Benefits

1. **DRY Principle** - No repeated class combinations
2. **Consistency** - Same spacing and layout everywhere
3. **Maintainability** - Change once, update everywhere
4. **Readability** - Semantic class names
5. **Scalability** - Easy to add new utilities

