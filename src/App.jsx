import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import OwnerSignUp from "./pages/OwnerSignUp.jsx";
import PalSignUp from "./pages/PalSignUp.jsx";
import DogProfile from "./pages/DogProfile.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundPattern from "./components/BackgroundPattern.jsx";
import Membership from "./pages/Membership.jsx";
import FAQ from "./pages/FAQ.jsx";
import Account from "./pages/Account.jsx";

function App() {
  return (
    <>
      <BackgroundPattern />
      <Router>
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Box pt="4rem">
                <Index />
              </Box>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/owner-signup" element={<OwnerSignUp />} />
          <Route path="/pal-signup" element={<PalSignUp />} />
          <Route path="/dog-profile/:id" element={<DogProfile />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
