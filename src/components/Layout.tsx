import { JSXElementConstructor, ReactElement } from "react";

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
      <p>dudaluda</p>
    </div>
  );
}

export default Layout;