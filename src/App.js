import "./App.css";
import About from "./compponents/About";
import Footer from "./compponents/Footer";
import Header from "./compponents/Header";
import MarqueeSlides from "./compponents/MarqueeSlides";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <body>
        <About />
        <MarqueeSlides />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
