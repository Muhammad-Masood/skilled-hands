import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NavbarLink } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const crafterNavbarLinks: NavbarLink[] = [
  {
    name: "Profile",
    path: "/crafter/profile",
  },
  {
    name: "You",
    path: "/crafter/profile",
  },
  {
    name: "Explore",
    path: "/jobs",
  },
];

export const userNavLinks: NavbarLink[] = [
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Your Jobs",
    path: "/user/jobs",
  },
  {
    name: "Crafters",
    path: "/crafters",
  },
  {
    name: "Post Jobs",
    path: "/jobs/create",
  },
  {
    name: "Orders",
    path: "/orders",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
