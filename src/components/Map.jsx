import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { defaults as defaultControls } from "ol/control";
import { XYZ } from "ol/source";

import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { places } from "../places";
import { pointer } from "../assets";

function useOnScreen(ref, animation) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add(animation);
      }
    });
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

const MapComponent = () => {
  const refTitle = useRef();
  const refParagraph = useRef();
  const refMap = useRef();

  useOnScreen(refTitle, "fade-in-left");
  useOnScreen(refParagraph, "fade-in-left");
  useOnScreen(refMap, "slit-in-vertical");

  useEffect(() => {
    const arcgisTiles = new TileLayer({
      source: new XYZ({
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attributions:
          'OpenLayers | Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Imagery/MapServer">ArcGIS</a>',
      }),

      title: "arcgisTiles",
    });

    const myPlaces = new VectorLayer({
      opacity: 0.9,
      source: new VectorSource({
        features: new GeoJSON().readFeatures(places),
      }),

      style: new Style({
        image: new Icon({
          color: [255, 225, 0],
          scale: 0.35,
          anchor: [0.5, 56],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          crossOrigin: "anonymous",
          src: pointer,
        }),
      }),
      visible: true,
      title: "places",
    });
    const map = new Map({
      target: "map",
      layers: [arcgisTiles, myPlaces],
      view: new View({
        // center: [2685027, 4638236],
        center: [23.7385, 37.9948],
        projection: "EPSG:4326",
        zoom: 6,
        minZoom: 5,
        maxZoom: 14,
        extent: [16.1469, 32.7213, 31.33, 43.2682],
      }),
      controls: defaultControls({ attributionOptions: { collapsible: false } }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <>
      <div ref={refTitle}>
        <p className={`${styles.sectionSubText} `}>Land surveying</p>
        <h2 className={`${styles.sectionHeadText}`}>Fieldwork places.</h2>
      </div>

      <div className="w-full flex">
        <p
          ref={refParagraph}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following web-map presents some of the places I have worked on
          land surveying projects, including topography (Total Station, static
          GPS, RTK) and geophysics (Geomagnetics, Free-air gravity anomaly).
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <div
          id="map"
          className="mt-5 w-full h-[360px] lg:w-3/5 lg:h-[480px]"
          ref={refMap}
        ></div>
      </div>
    </>
  );
};

export default SectionWrapper(MapComponent, "");
