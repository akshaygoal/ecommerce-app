import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/Home/Home";
import Footer from "./components/footer/footer";
import Pages from "./components/pages/pages";
import Shop from "./components/pages/shop";
import OversizedMoreData from "./components/pages/Oversized T-shirts/Page1/DetailsPage/OversizedMoreData.";
import OversizedT1 from "./components/pages/Oversized T-shirts/Page1/OversizedT1";
import OversizedT2 from "./components/pages/Oversized T-shirts/Page2/OversizedT2";
import Contact from "./components/pages/Contact/Contact";

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

          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
