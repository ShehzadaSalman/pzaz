import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  headerVariant?: "fixed" | "sticky";
}

const PageLayout = ({
  children,
  header,
  footer = <Footer />,
  className = "min-h-screen bg-background",
  headerVariant = "fixed",
}: PageLayoutProps) => {
  const resolvedHeader = header ?? <Header variant={headerVariant} />;
  return (
    <div className={className}>
      {resolvedHeader}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default PageLayout;
