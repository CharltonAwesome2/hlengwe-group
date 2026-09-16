// src/layouts/HealthcareLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "@components/healthcare/Navbar.jsx";
import Footer from "@components/healthcare/Footer.jsx";
import ScrollToTop from "@components/shared/ScrollToTop.jsx";

export default function HealthcareLayout() {
  return (
    <div className="healthcare-theme">
      <Navbar />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
