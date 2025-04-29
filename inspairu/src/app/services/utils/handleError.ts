import { ZodError } from "zod";

export function handleError(error: unknown): never {
  if (error instanceof ZodError) {
    throw error;
  }
  throw error instanceof Error
    ? error
    : new Error("Could not complete the action");
}
