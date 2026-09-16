// src/layouts/HoldingsLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "@components/holdings/Navbar.jsx";
import Footer from "@components/holdings/Footer.jsx";
import ScrollToTop from "@components/shared/ScrollToTop.jsx";

export default function HoldingsLayout() {
  return (
    <div className="holdings-theme">
      <Navbar />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
