import * as React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text: string;
}

function Pill({ icon, text, className, ...props }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-secondary text-secondary-foreground",
        className
      )}
      style={{
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 14,
        paddingRight: 14,
        gap: icon ? 5 : 0,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "23px",
        letterSpacing: "0%",
        whiteSpace: "nowrap",
      }}
      {...props}
    >
      {icon && <span className="flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}

export { Pill };
