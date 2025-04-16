import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerCarousel from "./BannerCarousel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <BannerCarousel />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
