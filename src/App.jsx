import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, RTXCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Fixed RTX background - visible on all sections except Hero and Contact */}
        <div className='fixed inset-0 z-0 pointer-events-none bg-primary'>
          <RTXCanvas />
        </div>

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
