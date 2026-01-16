/**
 * Centralized asset registry.
 * Provides type-safe access to all application assets.
 */

// Machine images
import maxtrimT2 from "@assets/machines/maxtrim-t2.webp";
import maxtrimT1 from "@assets/machines/maxtrim-t1.webp";
import maxformL2 from "@assets/machines/maxform-l2.webp";
import maxscanS1 from "@assets/machines/maxscan-s1.webp";
import maxprinterP2 from "@assets/machines/maxprinter-p2.webp";
import maxprinterP1 from "@assets/machines/maxprinter-p1.webp";
import maxmarkM2 from "@assets/machines/maxmark-m2.webp";
import maxpolishI from "@assets/machines/maxpolish-i.webp";
import maxpolishII from "@assets/machines/maxpolish-ii.webp";

/**
 * Machine image registry.
 * Maps machine IDs to their image paths.
 */
export const machineImageMap: Record<string, string> = {
  "maxtrim-t2": maxtrimT2,
  "maxtrim-t1": maxtrimT1,
  "maxform-l2": maxformL2,
  "maxscan-s1": maxscanS1,
  "maxprinter-p2": maxprinterP2,
  "maxprinter-p1": maxprinterP1,
  "maxmark-m2": maxmarkM2,
  "maxpolish-i": maxpolishI,
  "maxpolish-ii": maxpolishII,
} as const;

// Videos
import processHeroVideo from "@assets/heroes/videos/process-hero.mp4";
import homeHeroVideo from "@assets/heroes/videos/home-hero.mp4";
import expoHeroVideo from "@assets/heroes/videos/expo-hero.mp4";

/**
 * Video asset registry.
 */
export const videos = {
  processHero: processHeroVideo,
  homeHero: homeHeroVideo,
  expoHero: expoHeroVideo,
} as const;

