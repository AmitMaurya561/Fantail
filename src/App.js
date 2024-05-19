import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Location from "./pages/Location";

import Clothing from "./pages/Clothing";
import Cricket from "./pages/Cricket";
import ClothOrg from "./pages/Collenctions/ClothOrg";
import Fantailclothing from "./pages/Clothing/Fantailclothing";
import ClearanceSale from "./pages/Collenctions/ClearanceSale";
import Login from "./pages/AccountLogin/Login";
import BattingLegguard from "./pages/Collenctions/BattingLegguard";
import BattingGloves from "./pages/Collenctions/HandGloves";
import WicketKeeping from "./pages/Collenctions/WicketKeeping";
import Services from "./pages/Collenctions/Services/Services";



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/clothing" element={<Clothing />} />
         <Route path="/cricket" element={<Cricket />} />
        <Route path="/location" element={<Location />} />
        <Route path="/ClothOrg" element={<ClothOrg />} />
        <Route path="/Fantailclothing" element={<Fantailclothing />} />
        <Route path="/ClearanceSale" element={<ClearanceSale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/battingLegguard" element={<BattingLegguard />} />
        <Route path="/BattingGloves" element={<BattingGloves />} />
        <Route path="/WicketKeeping" element={<WicketKeeping />} />
        <Route path="/services" element={<Services />} />
        
       
      </Routes>
    
    </Router>
  );
}

export default App;


