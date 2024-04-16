import { City } from "../types";

export const randomIndex = (array: string[] | City[]): number => Math.floor(Math.random() * array.length);
