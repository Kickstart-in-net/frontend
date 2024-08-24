import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface User {
  fullName: string;
  email: string;
  birth_year: number;
  type: string;
}


export function sanitizeEmail(email: string): string {
  // Replace '@' with '_'
  let sanitizedEmail = email.replace(/@/g, '_');
  
  // Replace '.' with '-'
  sanitizedEmail = sanitizedEmail.replace(/\./g, '-');
  
  return sanitizedEmail;
}

export function unsanitizeEmail(sanitizedEmail: string): string {
  // Replace '_' with '@'
  let unsanitizedEmail = sanitizedEmail.replace(/_/g, '@');
  
  // Replace '-' with '.'
  unsanitizedEmail = unsanitizedEmail.replace(/-/g, '.');
  
  return unsanitizedEmail;
}
