import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_TITLE = "Haprabu Travel & Tour";
export const SITE_URL = "https://haprabutravelandtour.com";
export const SITE_DESCRIPTION =
  "Personalized Bali travel experiences crafted with love and local insight. 10+ years of expertise, hidden gems, and 24/7 support for your dream vacation.";
