/**
 * Machine-specific asset helpers.
 */

import { machines } from "@/config/machines";
import { machineImageMap } from "./index";

/**
 * Get the image path for a machine by its ID.
 *
 * @param machineId - Machine identifier
 * @returns Image path string
 * @throws Error if machine ID is invalid
 */
export function getMachineImagePath(machineId: string): string {
  if (!machines[machineId]) {
    throw new Error(`Invalid machine ID: ${machineId}`);
  }

  return machineImageMap[machineId] || `/assets/machines/${machineId}.webp`;
}

/**
 * Get all machine images as a record.
 *
 * @returns Record mapping machine IDs to image paths
 */
export function getAllMachineImages(): Record<string, string> {
  return Object.keys(machines).reduce((acc, id) => {
    acc[id] = getMachineImagePath(id);
    return acc;
  }, {} as Record<string, string>);
}

