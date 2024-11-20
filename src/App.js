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

// Other component imports...

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected-publications" element={<SelectedPublications />} />
        <Route path="/media" element={<Media />} />

        {/* Our Lab Route */}
        <Route path="/our-lab" element={<OurLab />}>
          <Route index element={<FirstsByOurLab />} /> {/* Default child route */}
          <Route path="firsts-by-our-lab" element={<FirstsByOurLab />} />
          <Route path="lab-members" element={<LabMembers />} />
          <Route path="faq" element={<FAQ />} />
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
    </Router>
  );
}

export default App;
