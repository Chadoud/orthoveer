# Consent Management System

This directory contains the cookie consent management system for OrthoVeer.

## Files

### `consent.types.ts`

TypeScript type definitions for `CookieConsent`:

```typescript
type CookieConsent = {
  necessary: true; // Always true, not user choice
  analytics: boolean;
  marketing: boolean;
};
```

### `consent.store.ts`

LocalStorage persistence layer:

- `getConsent()` - Read consent from localStorage
- `setConsent(consent)` - Save consent to localStorage
- `hasConsent(category)` - Check specific category
- `resetConsent()` - Clear consent (for cookie settings)

**Storage Key:** `orthoveer_cookie_consent`

**Error Handling:**

- Handles missing storage
- Handles JSON corruption
- Never throws at runtime (silent failures)

### `consent.utils.ts`

Pure helper functions:

- `isConsentRequired()` - Returns true if no consent exists

## Usage

```typescript
import {
  getConsent,
  setConsent,
  hasConsent,
} from "@/lib/consent/consent.store";
import { isConsentRequired } from "@/lib/consent/consent.utils";

// Check if consent exists
const consent = getConsent();
if (consent) {
  console.log("Analytics:", consent.analytics);
}

// Set consent
setConsent({
  necessary: true,
  analytics: true,
  marketing: false,
});

// Check specific category
if (hasConsent("analytics")) {
  // User has consented to analytics
}

// Check if banner should show
if (isConsentRequired()) {
  // Show cookie banner
}
```

## Data Structure

Consent is stored in localStorage as JSON:

```json
{
  "necessary": true,
  "analytics": true,
  "marketing": false
}
```

## Safety

- All functions handle missing/corrupted storage gracefully
- No browser API access at module top-level
- Never throws errors (returns null/false on failure)
