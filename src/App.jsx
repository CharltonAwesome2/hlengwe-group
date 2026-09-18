import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HoldingsLayout from "@layouts/HoldingsLayout.jsx";
import HealthcareLayout from "@layouts/HealthcareLayout.jsx";

import HoldingsHome from "@pages/holdings/Home.jsx";
import HoldingsAbout from "@pages/holdings/About.jsx";
import HoldingsServices from "@pages/holdings/Services.jsx";
import HoldingsSubsidiaries from "@pages/holdings/Subsidiaries.jsx";
import HoldingsTeam from "@pages/holdings/Team.jsx";
import HoldingsStakeHolderEngagement from "@pages/holdings/StakeHolderEngagement.jsx";
import HoldingsCurrentProject from "@pages/holdings/CurrentProject.jsx";
import HoldingsPartners from "@pages/holdings/Partners.jsx";
import HoldingsGallery from "@pages/holdings/Gallery.jsx";
import HoldingsContact from "@pages/holdings/Contact.jsx";

import HealthcareHome from "@pages/healthcare/Home.jsx";
import HealthcareAbout from "@pages/healthcare/About.jsx";
import HealthcareServices from "@pages/healthcare/Services.jsx";
import HealthcareSpecialisedAreas from "@pages/healthcare/SpecialisedAreas.jsx";
import HealthcareTeam from "@pages/healthcare/Team.jsx";
import HealthcareContact from "@pages/healthcare/Contact.jsx";

import useDocumentMeta from "@hooks/useDocumentMeta.js";
// import "./App.css";

function DocumentMeta() {
  useDocumentMeta();
  return null;
}

export default function App() {
  const basename = import.meta.env.BASE_URL || "/";
  return (
    <Router basename={basename}>
      <DocumentMeta />
      <Routes>
        {/* Hlengwe Holdings */}
        <Route path="/" element={<HoldingsLayout />}>
          <Route index element={<HoldingsHome />} />
          <Route path="about" element={<HoldingsAbout />} />
          <Route path="services" element={<HoldingsServices />} />
          <Route path="subsidiaries" element={<HoldingsSubsidiaries />} />
          <Route path="team" element={<HoldingsTeam />} />
          <Route path="stakeholder-engagement" element={<HoldingsStakeHolderEngagement />} />
          <Route path="current-project" element={<HoldingsCurrentProject />} />
          <Route path="partners" element={<HoldingsPartners />} />
          <Route path="gallery" element={<HoldingsGallery />} />
          <Route path="contact" element={<HoldingsContact />} />
        </Route>

        {/* Hlengwe Healthcare Solutions */}
        <Route path="/healthcare" element={<HealthcareLayout />}>
          <Route index element={<HealthcareHome />} />
          <Route path="about" element={<HealthcareAbout />} />
          <Route path="services" element={<HealthcareServices />} />
          <Route path="specialised" element={<HealthcareSpecialisedAreas />} />
          <Route path="team" element={<HealthcareTeam />} />
          <Route path="contact" element={<HealthcareContact />} />
        </Route>
      </Routes>
    </Router>
  );
}
