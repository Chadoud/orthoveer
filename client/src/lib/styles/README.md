# Design System Style Architecture

This directory contains the professional, type-safe design system for the application.

## Structure

```
styles/
├── index.ts       # Main exports and public API
├── types.ts       # TypeScript type definitions
├── variants.ts    # Style variant definitions
└── README.md      # This file
```

## Key Improvements

### 1. **Type Safety**
- All variants are strongly typed
- TypeScript autocomplete for all style options
- Compile-time error checking

### 2. **Better Organization**
- Separated concerns: types, variants, and exports
- Easy to find and modify specific style categories
- Scalable structure for adding new variants

### 3. **Enhanced Documentation**
- Comprehensive JSDoc comments
- Usage examples in code
- Clear API documentation

### 4. **Maintainability**
- Single source of truth for each variant
- Easy to update styles globally
- Consistent naming patterns

## Usage

### Basic Usage

```tsx
import { container, section, card } from "@/lib/styles";
import { cn } from "@/lib/utils";

<div className={cn(container)}>
  <section className={cn(section.base, "bg-secondary/20")}>
    <Card className={cn(card.base, "p-6")} />
  </section>
</div>
```

### With Type Safety

```tsx
import { section, card } from "@/lib/styles";
import type { SectionSize, CardVariant } from "@/lib/styles";
import { cn } from "@/lib/utils";

function MyComponent({ 
  sectionSize = "base",
  cardVariant = "base" 
}: { 
  sectionSize?: SectionSize;
  cardVariant?: CardVariant;
}) {
  return (
    <section className={cn(section[sectionSize])}>
      <Card className={cn(card[cardVariant])} />
    </section>
  );
}
```

### Using Utility Functions

```tsx
import { sectionClass, cardClass } from "@/lib/cn-utils";

<section className={sectionClass("large", "bg-secondary/20")}>
  <Card className={cardClass("hover", "p-6")} />
</section>
```

## Adding New Variants

1. **Add the type** in `types.ts`:
```typescript
export type MyComponentVariant = "default" | "primary" | "secondary";
```

2. **Define the variant** in `variants.ts`:
```typescript
export const myComponentVariants: Record<MyComponentVariant, string> = {
  default: "base-classes",
  primary: "primary-classes",
  secondary: "secondary-classes",
} as const;
```

3. **Export it** in `index.ts`:
```typescript
export const myComponent = myComponentVariants;
export type { MyComponentVariant } from "./types";
```

4. **Add utility function** in `cn-utils.ts`:
```typescript
export function myComponentClass(
  variant: MyComponentVariant = "default",
  ...classes: StyleClass[]
): string {
  return cn(myComponent[variant], ...classes);
}
```

## Benefits

1. **Type Safety**: Catch errors at compile time
2. **Autocomplete**: IDE support for all variants
3. **Refactoring**: Easy to rename and update styles
4. **Documentation**: Self-documenting code
5. **Consistency**: Enforced design system patterns
6. **Scalability**: Easy to extend and maintain

## Migration

The old `styles.ts` file is maintained for backward compatibility and re-exports from the new structure. All existing code continues to work without changes.

