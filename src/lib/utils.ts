
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert a string to a URL-friendly slug
 * Removes special characters, converts spaces to hyphens, and converts to lowercase
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')                  // Split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '')   // Remove diacritical marks
    .toLowerCase()                     // Convert to lowercase
    .trim()                            // Remove whitespace from both ends
    .replace(/\s+/g, '-')              // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')          // Remove all non-word characters except hyphens
    .replace(/\-\-+/g, '-')            // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')                // Remove leading hyphens
    .replace(/-+$/, '');               // Remove trailing hyphens
}
