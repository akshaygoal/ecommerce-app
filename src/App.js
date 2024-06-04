import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/Home/Home";
import Footer from "./components/footer/footer";

import OversizedMoreData from "./components/pages/Oversized T-shirts/Page1/DetailsPage/OversizedMoreData.";
import OversizedT1 from "./components/pages/Oversized T-shirts/Page1/OversizedT1";
import OversizedT2 from "./components/pages/Oversized T-shirts/Page2/OversizedT2";
import Contact from "./components/pages/ContactPage/Contact";
import Basics from "./components/pages/Oversized-Base/basics";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/oversized-page1" element={<OversizedT1 />} />
          <Route path="/oversized-page2" element={<OversizedT2 />} />
          <Route path="/oversized-tees/:id" element={<OversizedMoreData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oversized-basics" element={<Basics/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
