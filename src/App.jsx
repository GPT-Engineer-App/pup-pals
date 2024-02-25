import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OwnerSignUp from "./pages/OwnerSignUp.jsx";
import PalSignUp from "./pages/PalSignUp.jsx";
import DogProfile from "./pages/DogProfile.jsx";

import Navigation from "./components/Navigation.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/owner-signup" element={<OwnerSignUp />} />
        <Route path="/pal-signup" element={<PalSignUp />} />
        <Route path="/dog-profile/:id" element={<DogProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
