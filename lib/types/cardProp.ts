import { ReactNode } from "react";

export type CardColorTheme = "purple" | "green" | "orange" | "blue";

interface BaseCardProps {
  title: string;
  theme?: CardColorTheme;
  icon?: ReactNode;
  className?: string;
}

interface StandarCardProps extends BaseCardProps {
  type: "standard";
  subtitle?: string;
  value: string | number;
  badgeText?: string;
}

interface ProgressCardProps extends BaseCardProps {
  type: "progress";
  subtitle?: string;
  value: string | number;
  currentValue: number;
  maxValue: number;
}

interface RatioCardProps extends BaseCardProps {
  type: "ratio";
  subtitle?: string;
  currentCount: number;
  maxCount: number;
}

export type UniversalCardProps =
  | StandarCardProps
  | ProgressCardProps
  | RatioCardProps;
