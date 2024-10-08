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
import { Helmet } from "react-helmet";

const structuredJSON = JSON.stringify({
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
});

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./src/assets/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lewis | Portfolio</title>
        <meta
          name="description"
          content="Lewis Doukas is a Geomatics Engineer, passionated about creating software and web applications to solve complex problems."
        />
        <meta
          name="keywords"
          content="ilias doukas, ηλίας δούκας, lewis doukas"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <meta property="og:site_name" content="Lewis | Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Lewis Doukas | 3D Portfolio" />
        <meta
          property="og:description"
          content="Lewis Doukas is a Geomatics Engineer, passionated about creating software and web applications to solve complex problems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lewisdoukas.com" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/zy0tyktc2/portfolio/ilias.jpg?updatedAt=1728405670713"
        />
        <meta property="og:image:alt" content="Lewis Doukas" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doukaslewis" />
        <meta name="twitter:creator" content="@doukaslewis" />
        <meta name="twitter:title" content="Lewis Doukas | 3D Portfolio" />
        <meta
          name="twitter:description"
          content="Lewis Doukas is a Geomatics Engineer, passionated about creating software and web applications to solve complex problems."
        />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/zy0tyktc2/portfolio/ilias.jpg?updatedAt=1728405670713"
        />
        <script type="application/ld+json">{structuredJSON}</script>
      </Helmet>

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
    </BrowserRouter>
  );
};

export default App;
