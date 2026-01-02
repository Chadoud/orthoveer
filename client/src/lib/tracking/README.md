# Cookie Consent & Tracking System

This directory contains the cookie consent and Google Analytics tracking implementation for OrthoVeer.

## Architecture

The system follows a strict separation of concerns:

- **Consent Layer** (`../consent/`) - Manages user consent state
- **Tracking Layer** (`./`) - Handles GA loading and event tracking
- **UI Layer** (`../../components/layout/CookieBanner.tsx`) - User interface for consent

## Files

### `ga.ts`
- Dynamically loads Google Analytics 4 script
- Prevents double-loading
- Initializes `window.gtag` with anonymize_ip enabled
- Never throws errors (silent failures)

### `events.ts`
- `track(eventName, payload)` - Track custom events
- `trackPageView(path)` - Track SPA page views
- All functions are no-ops if consent is missing or GA is not loaded

### `init.ts`
- **SINGLE PLACE** for consent checking and GA loading
- Called on app mount and after consent changes
- Only loads GA if:
  - Analytics consent === true
  - Environment === production
  - VITE_GA_ID exists

## Usage

### Tracking Events

```typescript
import { track } from "@/lib/tracking/events";

// Track a custom event
track("contact_form_submit", {
  form_type: "contact",
  context: "general",
});
```

### Tracking Page Views

Page views are automatically tracked by `RouteTracker` component on route changes.

## Environment Variables

Set `VITE_GA_ID` in your production environment:

```env
VITE_GA_ID=G-XXXXXXXXXX
```

## Consent Revocation

If analytics consent changes from `true → false`:
- All tracking calls become no-ops immediately
- GA script remains loaded (not unloaded)
- GA cookies may persist (browser behavior)
- No events are sent after revocation

## Safety Guarantees

- Never throws errors if GA is unavailable
- Never assumes `window.gtag` exists
- Never runs at import time
- Passes TypeScript strict mode
- No `any` types used


