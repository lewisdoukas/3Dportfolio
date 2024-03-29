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
  emp,
  dksolver,
  dksurvey,
  geofinder,
  gps2radio,
  gravSolver,
  liquidity,
  moransi,
  satellitePosition,
  strBot,
  teleBot,
  webhookBot,
  yaxul,
  github,
  report,
  stop,
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
      "Software & Web developer, creating & maintaining several data analysis & spatial tools (Python), WebGIS applications (ArcGIS JS API, OpenLayers, Leaflet) and mobile applications (React-native, Cordova).",
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
];

const projects = [
  {
    name: "BreadBytes - Yaxul.com",
    description:
      "Web-based platform that allows users to translate a TradingView signal into an order on several crypto exchanges like Binance, Bybit, BingX, Bitget and Phemex. \
      Users can track live performance of opened positions, order history with PnL, generate performance cards and send them to a Discord server.",
    tags: [
      {
        name: "python",
        color: "yellow-blue-text-gradient",
      },
      {
        name: "flask",
        color: "text-[#bdcacb]",
      },
      {
        name: "tailwindcss",
        color: "text-[#38bdf8]",
      },
    ],
    image: yaxul,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "dkSolver",
    description:
      "Desktop application which allows users to adjust a free-air gravity anomaly network using linear regression techniques. \
      It implements hypothesis testing using F-test, exports relevant tables & reports and generates a web-map showing the location\
      and adjusted values of network's stations.",
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
      "Mobile application that enables users to enter coordinates of a point and determines if it belongs to Greece territory, calculating the minimum distance from the borderline.\
      It provides measurement & projection tools to transform coordinates to supported CRS (WGS84, GGRS87, ED50, MGRS).",
    tags: [
      {
        name: "react-native",
        color: "pink-text-gradient",
      },
      {
        name: "openlayers",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-[#4a7dda]",
      },
    ],
    image: geofinder,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "dkSurvey",
    description:
      "Desktop application which provides tools related to land surveying and allows engineers to process measurement data,\
      such as network adjustment, coordinate projection, traverse, set out and several geodetic and AutoCAD related tools.",
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
    ],
    image: dksurvey,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "GPS2Radio",
    description:
      "Mobile application which enables users to share their current location through a radio network. It uses device's GPS and it can operate offline.\
      It provides measurement and projection tools for supported CRS (WGS84, GGRS87, ED50, MGRS) and generates reports.",
    tags: [
      {
        name: "cordova",
        color: "text-[#a525f9]",
      },
      {
        name: "openlayers",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-[#4a7dda]",
      },
    ],
    image: gps2radio,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FV1k9FZQ3Z88S-XopQ?e=YF2Ua8",
    link_image: report,
  },

  {
    name: "Moran's I",
    description:
      "A scientific application which calculates the spatial autocorrelation index - Moran's I for a given shapefile. It detects outliers,\
      implements hypothesis testing using permutations and generates relevant graphs and reports.",
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
    ],
    image: moransi,
    source_code_link:
      "https://1drv.ms/b/s!Ai6BWKJYs6FV1lA5Ru0tG7VYr3dr?e=eApXso",
    link_image: report,
  },
  {
    name: "Telegram-Binance Bot",
    description:
      "Desktop application which enables users to translate incoming trading signals from a telegram chat into actual orders.\
      Upon a given trading signal it places an order with stop loss & take profit to Binance exchange using APIs.",
    tags: [
      {
        name: "python",
        color: "yellow-blue-text-gradient",
      },
      {
        name: "binance-api",
        color: "text-[#f1cc0c]",
      },
    ],
    image: teleBot,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "LiquidityBreaks",
    description:
      "This is a technical indicator in python, originally written in TradingView's PineScript language. The indicator generates entry signals based on liquidity breaks\
      of a given OHLCV data series using pivots & volume analysis.",
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
        name: "ta-lib",
        color: "text-[#84f10c]",
      },
    ],
    image: liquidity,
    source_code_link: "https://github.com/lewisdoukas/liquidity-breaks",
    link_image: github,
  },
  {
    name: "Trading Bot",
    description:
      "Desktop application which allows users to connect with a crypto exchange using APIs and \
      automate trading procedures based on conditions implied by an underlying trading strategy.\
      It provides backtesting functionality using the powerfull library vectorbt.",
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
        name: "ta-lib",
        color: "text-[#84f10c]",
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
      "Minimalistic desktop application that allows users to adjust a free-air anomaly gravity loop. Users provide a relevant data set\
      containing the actual measurement and std for each examine point. It implements hypothesis testing using F-test and exports results as .csv and reports as .txt.",
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
    ],
    image: gravSolver,
    source_code_link: "https://github.com/lewisdoukas/gravity-loop-solver",
    link_image: github,
  },
  {
    name: "Webhook Bot",
    description:
      "Desktop application which enables users to run a publically available server hosted on their PC, which listens for webhooks from TradingView.\
    It processes incoming trading signals and place actual orders with stop loss & take profit to Bybit crypto exchange using APIs.",
    tags: [
      {
        name: "python",
        color: "yellow-blue-text-gradient",
      },
      {
        name: "flask",
        color: "text-[#bdcacb]",
      },
      {
        name: "ngrok",
        color: "text-[#e4ebd2]",
      },
      {
        name: "bybit-api",
        color: "text-[#fca602]",
      },
    ],
    image: webhookBot,
    source_code_link: "",
    link_image: stop,
  },
  {
    name: "SatellitePosition",
    description:
      "A python script which determines the position (X, Y, Z) at WGS84 Coordinate Reference System of a given satellite for a specific timestamp \
      based on Kepler's laws of planetary motion. Users can provide the relevant navigation message as .csv file and a desirable timestamp.",
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
    ],
    image: satellitePosition,
    source_code_link: "https://github.com/lewisdoukas/satellitePosition",
    link_image: github,
  },
];

const testimonials = [];

export { services, technologies, experiences, projects, testimonials };
