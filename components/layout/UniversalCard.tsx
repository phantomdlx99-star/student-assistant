import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { UniversalCardProps } from "@/lib/types/cardProp";
import { cn } from "@/lib/utils";
import { cardThemeStyles } from "@/lib/cardTheme";
import { Progress } from "../ui/progress";

const UniversalCard: React.FC<UniversalCardProps> = (props) => {
  const { title, theme = "purple", icon, className } = props;
  const style = cardThemeStyles[theme];
  return (
    <Card
      className={cn(
        "transition-all duration-200 border shadow-sm relative overflow-hidden flex flex-col justify-start",
        style.bg,
        style.border,
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-semibold text-gray-600">
          {title}
        </CardTitle>
        {icon && (
          <div
            className={cn(
              "p-2.5 rounded-full flex items-center justify-center",
              style.iconBg,
            )}
          >
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {/* Render Type 1: Standard Metric */}
        {props.type === "standard" && (
          <div className="space-y-1">
            <div
              className={cn(
                "text-2xl font-extrabold text-gray-900",
                style.text,
              )}
            >
              {props.value}
            </div>
            {props.subtitle && (
              <p className="text-xs font-medium text-gray-500">
                {props.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Render Type 2: Progress Bar Metric */}
        {props.type === "progress" && (
          <div className="space-y-2">
            <div
              className={cn(
                "text-2xl font-extrabold text-gray-900",
                style.text,
              )}
            >
              {props.value}
            </div>
            {props.subtitle && (
              <p className="text-xs font-medium text-gray-400">
                {props.subtitle}
              </p>
            )}
            <Progress
              value={Math.min(100, (props.currentValue / props.maxValue) * 100)}
              className="h-2 w-full bg-gray-200/80"
              indicatorClassname={style.progress}
            />
          </div>
        )}

        {/* Render Type 3: Ratio Metric */}
        {props.type === "ratio" && (
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-gray-900">
              {props.currentCount}{" "}
              <span className="text-lg font-medium text-gray-400">
                / {props.maxCount}
              </span>
            </div>
            {props.subtitle && (
              <p className="text-xs font-medium text-gray-500">
                {props.subtitle}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UniversalCard;
