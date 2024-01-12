import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import BackToTop from "./Component/BacktoTop";
import Contact from "./Pages/Contact";
import IsoRelation from "./Pages/Iso-relation";
import Investor from "./Pages/Investors";
import { Privacypolicy } from "./Pages/Privacypolicy";
import { Termscondition } from "./Pages/Termscondition";
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Home />}></Route>
          <Route exact path="/getstarted" element={<Home />}></Route>

        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
  
        <Routes>
          <Route exact path="/iso-relation" element={<IsoRelation />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/investors" element={<Investor />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/privacypolicy" element={<Privacypolicy />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/termscondition" element={<Termscondition />}></Route>
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </>
  );
}
