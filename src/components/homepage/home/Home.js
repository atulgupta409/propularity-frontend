import React from "react";
import HomeBanner from "../home-banner/HomeBanner";
import TopProperties from "../top-properties/TopProperties";
import TopLocalities from "../top-localities/TopLocalities";
import PriceRangeSlider from "../price-range-slider/PriceRangeSlider";
import FeaturedCollection from "../featured-collection/FeaturedCollection";
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
      <BuildersSlider />
      {/* <PriceRangeSlider /> */}
      {/* <FeaturedCollection /> */}
      <Faq />
    </div>
  );
}

export default Home;
