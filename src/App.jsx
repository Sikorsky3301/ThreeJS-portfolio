import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, RTXCanvas } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {!isMobile && (
          <div className='fixed inset-0 z-0 pointer-events-none bg-primary'>
            <RTXCanvas />
          </div>
        )}

        <div className='relative z-10'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <div
            className='relative z-10'
            style={{ background: "rgba(0,0,0,0.65)" }}
          >
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
          </div>
          <div className='relative z-10 bg-primary'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
