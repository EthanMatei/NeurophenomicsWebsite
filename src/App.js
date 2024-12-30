import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurLab from './components/AboutUs/OurLab';
import Research from './components/Research';
import FirstsByOurLab from './components/ResearchAndPublications/FirstsbyOurLab';
import LabMembers from './components/AboutUs/LabMembers';
import FAQ from './components/AboutUs/FAQ';
import CFG from './components/Research/CFG.js';
import AnimalModels from './components/Research/AnimalModels';
import PhenoChipping from './components/Research/PhenoChipping';
import Mindscape3D from './components/Research/Mindscape3D';
import CurrentResearch from './components/Research/CurrentResearch';
import Pyramids from './components/Research/Pyramids';
import PathwaysAndMechanisms from './components/Research/PathwaysAndMechanisms';
import SelectedPublications from './components/ResearchAndPublications/SelectedPublications';
import Media from './components/MediaAndCommunity/Media';
import RecentPresentations from './components/AboutUs/recentpresen.js';
import BiomarkerFAQ from './components/FAQs/BioDisc.js';
import BipolarGenesFAQ from './components/FAQs/BipDisc.js';
import MoodFAQ from './components/FAQs/Moodfaq.js';
import ContactPage from './components/AboutUs/ContactUs';
import GScholarRedirect from './components/MediaAndCommunity/gscholar.js';
import LxmRedirect from './components/MediaAndCommunity/LxMbook.js';
import styled from 'styled-components';
import Philanthropy from './components/MediaAndCommunity/philanthropy.js';
import PhotoAlbum from './components/photoalbum.js';



const Layout = styled.div`
  display: flex; 
  /* This ensures the sidebar is on the left, main content on the right */
`;

const MainContent = styled.div`
  flex: 1;        /* Grow to fill remaining width */
  padding: 2rem;  /* Optional spacing */
`;


function App() {
  return (
    <Router>
      <Layout>
      <Navbar />
      <MainContent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected-publications" element={<SelectedPublications />} />
        <Route path="/media" element={<Media />} />
        <Route path="/Firsts" element={<FirstsByOurLab />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/gscholar" element={<GScholarRedirect />} />
        <Route path="/book" element={<LxmRedirect />} />
        <Route path="/philan" element={<Philanthropy />} />
        <Route path="/photoalbum" element={<PhotoAlbum />} />


        <Route path="/FAQ" element={<FAQ />} >
          <Route index element={<BiomarkerFAQ />} />
          <Route path="biodiscfaq" element={<BiomarkerFAQ />} />
          <Route path="bidiscfaq" element={<BipolarGenesFAQ />} />
          <Route path="moodfaq" element={<MoodFAQ />} />
        </Route>

        {/* Our Lab Route */}
        <Route path="/Our-Lab" element={<OurLab />}>
          <Route index element={<LabMembers />} /> {/* Default child route */}
          <Route path="lab-members" element={<LabMembers />} />
          <Route path="firsts-by-our-lab" element={<FirstsByOurLab />} />
          <Route path='recent' element={<RecentPresentations />} />
        </Route>

        {/* Research Route */}
        <Route path="/research" element={<Research />}>
          <Route index element={<CFG />} /> {/* Default child route */}
          <Route path="convergent-functional-genomics" element={<CFG />} />
          <Route path="animal-models" element={<AnimalModels />} />
          <Route path="pheno-chipping" element={<PhenoChipping />} />
          <Route path="3d-mindscape" element={<Mindscape3D />} />
          <Route path="current-research" element={<CurrentResearch />} />
          <Route path="pyramids" element={<Pyramids />} />
          <Route path="pathways-and-mechanisms" element={<PathwaysAndMechanisms />} />
        </Route>
      </Routes>
      </MainContent>
    </Layout>
    </Router>
  );
}

export default App;
