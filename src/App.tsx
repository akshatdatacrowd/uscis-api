import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index/Index";
import PricingIndex from "./components/Pricing/PricingIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingIndex />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
