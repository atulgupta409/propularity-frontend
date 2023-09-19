import React from "react";
import HomeBanner from "../home-banner/HomeBanner";
import TopProperties from "../top-properties/TopProperties";
import TopLocalities from "../top-localities/TopLocalities";
import BuildersSlider from "../builders-slider/BuildersSlider";
import Faq from "../faq/Faq";
import TopProjectCity from "../top-projects-city/TopProjectCity";

function Home() {
  return (
    <div>
      <HomeBanner />
      <TopProperties />
      <TopLocalities />
      <TopProjectCity />
      <BuildersSlider myClass={"home_top_builders"} />
      <Faq />
    </div>
  );
}

export default Home;
