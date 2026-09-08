import { ThemeColor } from "@/models/types";

export const colorMap: Record<
  ThemeColor,
  { bg: string; bgTint: string; text: string; border: string; ring: string }
> = {
  indigo: {
    bg: "bg-indigo",
    bgTint: "bg-indigo-tint",
    text: "text-indigo",
    border: "border-indigo",
    ring: "ring-indigo",
  },
  coral: {
    bg: "bg-coral",
    bgTint: "bg-coral-tint",
    text: "text-coral-dark",
    border: "border-coral",
    ring: "ring-coral",
  },
  mint: {
    bg: "bg-mint",
    bgTint: "bg-mint-tint",
    text: "text-mint-dark",
    border: "border-mint",
    ring: "ring-mint",
  },
  saffron: {
    bg: "bg-saffron",
    bgTint: "bg-saffron-tint",
    text: "text-saffron-dark",
    border: "border-saffron",
    ring: "ring-saffron",
  },
};
