import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./compponents/About";
import Footer from "./compponents/Footer";
import Header from "./compponents/Header";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="all">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
