import * as React from "react";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  pillText?: string;
  pillIcon?: React.ReactNode;
  pillClassName?: string;
  title: React.ReactNode;
  titleClassName?: string;
  description?: React.ReactNode;
  descriptionClassName?: string;
  align?: "center" | "left";
}

const SectionHeader = ({
  pillText,
  pillIcon,
  pillClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleAlignClass = align === "center" ? "text-center" : "text-left";
  const descAlignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("flex flex-col", alignClass, className)} {...props}>
      {pillText ? <Pill text={pillText} icon={pillIcon} className={pillClassName} /> : null}
      <h2
        className={cn(
          "font-lato font-extrabold text-5xl md:text-[48px] leading-tight py-2",
          titleAlignClass,
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-lato font-normal text-[20px] leading-[30px] tracking-normal text-[#878787] max-w-3xl mx-auto",
            descAlignClass,
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
