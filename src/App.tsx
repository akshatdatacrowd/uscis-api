import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index/Index";
import PricingIndex from "./components/Pricing/PricingIndex";
import SignUp from "./components/SignUp/SignUp";
import PlayArea from "./components/PlayArea/PlayArea";
import CaseTracker from "./components/CaseTracker/CaseTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingIndex />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/playarea" element={<PlayArea />} />
          <Route path="/tracker" element={<CaseTracker />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
