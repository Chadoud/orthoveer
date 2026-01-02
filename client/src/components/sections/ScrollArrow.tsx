import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ScrollArrowProps {
  /** Custom text to display with the arrow */
  text?: string;
  /** The hero section element to monitor */
  heroRef: React.RefObject<HTMLElement | null>;
}

export function ScrollArrow({ text, heroRef }: ScrollArrowProps) {
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Check if hero is fully in view (100% of viewport)
    const checkHeroInView = () => {
      const rect = heroElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Check if hero is fully visible (top >= 0 and bottom <= windowHeight)
      const isFullyInView = rect.top >= 0 && rect.bottom <= windowHeight;
      return isFullyInView;
    };

    // Handle scroll events
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Hide arrow immediately when scrolling
      setShowScrollArrow(false);

      // Check if hero is in view
      if (checkHeroInView()) {
        // Set timeout to show arrow after 1 second of no scrolling
        scrollTimeoutRef.current = setTimeout(() => {
          setShowScrollArrow(true);
        }, 1000);
      } else {
        setShowScrollArrow(false);
      }
    };

    // Initial check on mount
    const initialCheck = () => {
      if (checkHeroInView()) {
        scrollTimeoutRef.current = setTimeout(() => {
          setShowScrollArrow(true);
        }, 1000);
      }
    };

    // Run initial check after a short delay to ensure page is loaded
    const initialTimeout = setTimeout(initialCheck, 100);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      clearTimeout(initialTimeout);
    };
  }, [heroRef]);

  const handleScrollClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollClick}
      className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 cursor-pointer hover:opacity-80 focus:outline-none rounded-lg p-2 ${
        showScrollArrow ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label={text || "Scroll down"}
    >
      {text && (
        <span
          className={`text-white/80 text-sm font-medium ${
            showScrollArrow ? "animate-pulse" : ""
          }`}
        >
          {text}
        </span>
      )}
      <ChevronDown
        className={`w-8 h-8 text-white/80 ${
          showScrollArrow ? "animate-pulse" : ""
        }`}
      />
    </button>
  );
}
