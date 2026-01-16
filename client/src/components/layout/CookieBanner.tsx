import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { setConsent, getConsent } from "@/lib/consent/consent.store";
import { isConsentRequired } from "@/lib/consent/consent.utils";
import { initTracking } from "@/lib/tracking/init";
import type { CookieConsent } from "@/lib/consent/consent.types";

/**
 * Cookie consent banner component.
 * UI ONLY - no tracking logic, no GA loading, no environment checks.
 * Visibility derived from consent state only.
 */
export function CookieBanner() {
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  // Initialize with true to ensure banner shows by default on first render
  // Then immediately check actual consent status
  const [shouldShow, setShouldShow] = useState(true);

  // Check consent status on mount and listen for changes
  useEffect(() => {
    // Check immediately on mount - this ensures banner shows by default
    const checkConsent = () => {
      setShouldShow(isConsentRequired());
    };

    // Check right away
    checkConsent();

    // Listen for storage changes (e.g., from other tabs or resetConsent)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "Orthoveer_cookie_consent" || e.key === null) {
        checkConsent();
      }
    };

    // Listen for custom events (e.g., when consent is set in this tab)
    const handleConsentChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);
    // Custom event for same-tab updates
    window.addEventListener("consent-changed", handleConsentChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, []);

  // Reset toggles when customize view is opened
  useEffect(() => {
    if (showCustomize) {
      setAnalyticsEnabled(false);
      setMarketingEnabled(false);
    }
  }, [showCustomize]);

  if (!shouldShow) {
    return null;
  }

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(consent);
    setShouldShow(false);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("consent-changed"));
    // Trigger tracking initialization immediately after consent is set
    // This is the single place allowed to call initTracking after consent change
    initTracking();
  };

  const handleSavePreferences = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    };
    setConsent(consent);
    setShouldShow(false);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("consent-changed"));
    // Trigger tracking initialization immediately after consent is set
    // initTracking will check if analytics is enabled
    initTracking();
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-modal="true"
    >
      <Card className="w-full bg-background/50 backdrop-blur-sm border-white/20 shadow-2xl rounded-none border-t border-b-0 border-l-0 border-r-0">
        <div className="p-6 md:p-8 container mx-auto">
          {!showCustomize ? (
            <>
              <h2
                id="cookie-banner-title"
                className="text-xl font-bold text-white mb-4 font-heading"
              >
                Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze
                site traffic. You can choose to accept all cookies or customize
                your preferences.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms-of-service"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Terms of Service
                </Link>
                {", "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Privacy Policy
                </Link>
                {" and "}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Accept All
                </Button>
                <Button
                  onClick={() => setShowCustomize(true)}
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                >
                  Customize
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2
                id="cookie-banner-title"
                className="text-xl font-bold text-white mb-4 font-heading"
              >
                Customize Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Choose which cookies you want to allow. Necessary cookies are
                always enabled as they are required for the site to function.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Learn more in our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Cookie Policy
                </Link>
                {" and "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="space-y-6 mb-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <label
                      htmlFor="necessary-toggle"
                      className="text-white font-semibold block mb-1"
                    >
                      Necessary Cookies
                    </label>
                    <p className="text-sm text-gray-400">
                      Required for the website to function properly. Cannot be
                      disabled.
                    </p>
                  </div>
                  <Switch
                    id="necessary-toggle"
                    checked={true}
                    disabled={true}
                    aria-label="Necessary cookies (always enabled)"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <label
                      htmlFor="analytics-toggle"
                      className="text-white font-semibold block mb-1 cursor-pointer"
                    >
                      Analytics Cookies
                    </label>
                    <p className="text-sm text-gray-400">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <Switch
                    id="analytics-toggle"
                    checked={analyticsEnabled}
                    onCheckedChange={setAnalyticsEnabled}
                    aria-label="Enable analytics cookies"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <label
                      htmlFor="marketing-toggle"
                      className="text-white font-semibold block mb-1 cursor-pointer"
                    >
                      Marketing Cookies
                    </label>
                    <p className="text-sm text-gray-400">
                      Used to deliver personalized advertisements and track
                      campaign performance.
                    </p>
                  </div>
                  <Switch
                    id="marketing-toggle"
                    checked={marketingEnabled}
                    onCheckedChange={setMarketingEnabled}
                    aria-label="Enable marketing cookies"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={() => setShowCustomize(false)}
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                >
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
