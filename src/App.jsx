import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Map,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center relative">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* <Feedbacks /> */}
        <Map />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Lewis Doukas",
          url: "https://lewisdoukas.com",
          image:
            "https://ik.imagekit.io/zy0tyktc2/portfolio/ilias.jpg?updatedAt=1728405670713",
          sameAs: [
            "https://x.com/DoukasLewis",
            "https://github.com/lewisdoukas/",
            "https://lewisdoukas.com",
          ],
        }}
      ></script>
    </BrowserRouter>
  );
};

export default App;
