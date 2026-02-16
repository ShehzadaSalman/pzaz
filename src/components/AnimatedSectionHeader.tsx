import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import SectionHeader, { type SectionHeaderProps } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

interface AnimatedSectionHeaderProps extends SectionHeaderProps {
  wrapperClassName?: string;
  motionProps?: Omit<HTMLMotionProps<"div">, "children" | "className">;
}

const AnimatedSectionHeader = ({
  wrapperClassName,
  motionProps,
  ...sectionHeaderProps
}: AnimatedSectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(wrapperClassName)}
      {...motionProps}
    >
      <SectionHeader {...sectionHeaderProps} />
    </motion.div>
  );
};

export default AnimatedSectionHeader;
