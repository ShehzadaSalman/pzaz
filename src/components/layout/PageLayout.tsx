import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const PageLayout = ({
  children,
  header = <Header />,
  footer = <Footer />,
  className = "min-h-screen bg-background",
}: PageLayoutProps) => {
  return (
    <div className={className}>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default PageLayout;
