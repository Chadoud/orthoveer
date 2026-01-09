/**
 * Centralized asset registry.
 * Provides type-safe access to all application assets.
 */

// Machine images
import maxtrimT2 from "@assets/machinesPage/maxtrim-t2.png";
import maxtrimT1 from "@assets/machinesPage/maxtrim-t1.png";
import maxformL2 from "@assets/machinesPage/maxform-l2.png";
import maxscanS1 from "@assets/machinesPage/maxscan-s1.png";
import maxprinterP2 from "@assets/machinesPage/maxprinter-p2.png";
import maxprinterP1 from "@assets/machinesPage/maxprinter-p1.png";
import maxmarkM2 from "@assets/machinesPage/maxmark-m2.png";
import maxpolishI from "@assets/machinesPage/maxpolish-i.png";
import maxpolishII from "@assets/machinesPage/maxpolish-ii.png";

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
import heroMachinesVideo from "@assets/machinesPage/heroMachines.mp4";
import homeHeroVideo from "@assets/homePage/homeHero.mp4";
import expoHeroVideo from "@assets/expoHero.mp4";
import orthoHeroVideo from "@assets/orthoHero.mov";

/**
 * Video asset registry.
 */
export const videos = {
  heroMachines: heroMachinesVideo,
  homeHero: homeHeroVideo,
  expoHero: expoHeroVideo,
  orthoHero: orthoHeroVideo,
} as const;

