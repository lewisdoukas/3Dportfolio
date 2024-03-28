import {
  mobile,
  backend,
  creator,
  web,
  python,
  javascript,
  pinescript,
  html,
  css,
  svelte,
  reactjs,
  flask,
  firebase,
  threejs,
  arcgis,
  sse,
  spv,
  adte,
  gys,
  fiverr,
  emp,
  blackjack,
  dksolver,
  dksurvey,
  geofinder,
  gps2radio,
  gps2radioDesktop,
  gravSolver,
  leaderboard,
  liquidity,
  moransi,
  mosxato,
  satellitePosition,
  strBot,
  teleBot,
  webhookBot,
  yaxul,
  github,
  report,
  stop,
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "Geoinformatics Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Flask",
    icon: flask,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PineScript",
    icon: pinescript,
  },

  {
    name: "ArcGIS",
    icon: arcgis,
  },
];

const experiences = [
  {
    title: "Officer cadet",
    company_name: "Hellenic Army Academy",
    icon: sse,
    iconBg: "#383E56",
    date: "Sep 2012 - Jun 2016",
    points: [
      "Military and academic education to become an armed forces officer.",
      "Graduation grade 8.1/10",
    ],
  },
  {
    title: "Lieutenant of Artillery",
    company_name: "School of Artillery",
    icon: spv,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - Jun 2018",
    points: [
      "One year of military training to obtain specialty on artillery sector.",
      "Graduated at 4th place.",
      "One year as a trainer of artillery's reserve officers.",
    ],
  },
  {
    title: "Artillery Commander",
    company_name: "95th National Guard Higher Command",
    icon: adte,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Sep 2019",
    points: [
      "Commander of artillery company.",
      "Participating in several military exercises and managing personnel and resources.",
    ],
  },
  {
    title: "Geomatics Engineer",
    company_name:
      "Hellenic Military Geographical Service - School of Topography",
    icon: gys,
    iconBg: "#383E56",
    date: "Oct 2019 - Jan 2023",
    points: [
      "Studying surveying and geomatics engineering (Oct 2019 - Jun 2021).",
      "Graduation grade 19.25/20 at 1st place.",
      "Participating in several land surveying projects including measurements with Total Station & GPS, \
      Geomagnetic and Gravity measurements across Greece's mainland and islands.",
      "Officer of HMGS Geodatabase department (Jul 2021 - Jan 2023).",
      "Working on several GIS projects using ArcGIS technologies.",
      "Software & Web developer, creating & maintaining several data analysis & spatial tools (Python), WebGIS applications (ArcGIS JS API, OpenLayers, Leaflet) and mobile applications (Cordova, Flutter).",
    ],
  },
  {
    title: "Surveyor - Geoinformatics Engineer",
    company_name: "National Technical University of Athens",
    icon: emp,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Studying to obtain an Integrated Master degree at School of Rural, Surveying and Geoinformatics Engineering.",
    ],
  },
  // {
  //   title: "Freelancer Developer",
  //   company_name: "Fiverr",
  //   icon: fiverr,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2023 - Present",
  //   points: [
  //     "Developing applications related to finance, trading and crypto currencies.",
  //     "Creating automations for trading using TradingView Webhooks, Telegram posts and other social platforms.",
  //     "Automate trading using several strategies, indicators, technical analysis tools and APIs.",
  //     "Creating web applications related to crypto currency trading & TradingView Webhooks routing to crypto exchanges using APIs.",
  //     "Completing over 100 orders, satisfying over 50 unique clients and having over 100 5⭐️ reviews.",
  //     "Check out my profile",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BreadBytes - Yaxul.com",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python",
        color: "yellow-blue-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      },
      {
        name: "numpy",
        color: "yellow-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-yellow-text-gradient",
      },
    ],
    image: yaxul,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "dkSolver",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python",
        color: "yellow-blue-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      },
      {
        name: "numpy",
        color: "yellow-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-yellow-text-gradient",
      },
    ],
    image: dksolver,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FViXit8wloSeS_j2ZP?e=f8Gsl0",
    link_image: report,
  },
  {
    name: "GeoFinder",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: geofinder,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "dkSurvey",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dksurvey,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "Telegram-Binance Bot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: teleBot,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "Moran's I",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: moransi,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FV1lA5Ru0tG7VYr3dr?e=eApXso",
    link_image: report,
  },
  {
    name: "GPS2Radio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gps2radio,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FV1k9FZQ3Z88S-XopQ?e=YF2Ua8",
    link_image: report,
  },
  {
    name: "LiquidityBreaks",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: liquidity,
    source_code_link: "https://github.com/lewisdoukas/liquidity-breaks",
    link_image: github,
  },
  {
    name: "Trading Bot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: strBot,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FV1lEeH0mlO8OARsc5?e=BdEYi6",
    link_image: report,
  },
  {
    name: "GravSolver",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gravSolver,
    source_code_link: "https://github.com/lewisdoukas/gravity-loop-solver",
    link_image: github,
  },
  {
    name: "Webhook Bot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webhookBot,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "SatellitePosition",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: satellitePosition,
    source_code_link: "https://github.com/lewisdoukas/satellitePosition",
    link_image: github,
  },
  // {
  //   name: "Moschato 15-minute city",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: mosxato,
  //   source_code_link:
  //     "https://ntua-gis.maps.arcgis.com/apps/webappviewer/index.html?id=2ee2069518fc402b96dfd22628d6d677",
  //   link_image: arcgis,
  // },
  // {
  //   name: "Binance Leaderboard",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: leaderboard,
  //   source_code_link: "",
  //   link_image: stop,
  // },
  // {
  //   name: "Duke's Blackjack",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: blackjack,
  //   source_code_link: "https://github.com/lewisdoukas/DukeBlackJack",
  //   link_image: github,
  // },
];

export { services, technologies, experiences, testimonials, projects };
