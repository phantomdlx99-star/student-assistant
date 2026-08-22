import { CardColorTheme } from "./types/cardProp";

export const cardThemeStyles: Record<
  CardColorTheme,
  { bg: string; border: string; iconBg: string; text: string; progress: string }
> = {
  purple: {
    bg: "bg-purple-50/50 hover:bg-purple-50/80",
    iconBg: "bg-purple-100 text-purple-600",
    text: "text-purple-600",
    border: "border-purple-100",
    progress: "bg-purple-600",
  },
  blue: {
    bg: "bg-blue-50/50 hover:bg-blue-50/80",
    iconBg: "bg-blue-100 text-blue-600",
    text: "text-blue-600",
    border: "border-blue-100",
    progress: "bg-blue-600",
  },
  green: {
    bg: "bg-emerald-50/50 hover:bg-emerald-50/80",
    iconBg: "bg-emerald-100 text-emerald-600",
    text: "text-emerald-600",
    border: "border-emerald-100",
    progress: "bg-emerald-600",
  },
  orange: {
    bg: "bg-orange-50/50 hover:bg-orange-50/80",
    iconBg: "bg-orange-100 text-orange-600",
    text: "text-orange-600",
    border: "border-orange-100",
    progress: "bg-orange-600",
  },
};
