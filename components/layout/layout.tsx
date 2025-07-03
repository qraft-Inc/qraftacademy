"use client";

import Navigation from "./navigation"; // Ensure Navigation is imported correctly
import Footer from "./footer"; // Ensure Footer is imported correctly

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; // Ensure this is a default export