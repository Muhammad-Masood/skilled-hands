import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { NavbarLink } from "./types";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const navbarLinks: NavbarLink[] = [
  {
    name: "Profile",
    path: "/crafter/profile",
  },
];