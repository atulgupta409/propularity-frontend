import React from "react";
import HomeBanner from "../home-banner/HomeBanner";
import TopProperties from "../top-properties/TopProperties";
import TopLocalities from "../top-localities/TopLocalities";
import BuildersSlider from "../builders-slider/BuildersSlider";
import Faq from "../faq/Faq";
import TopProjectCity from "../top-projects-city/TopProjectCity";
import FixedForm from "../../fixed-form/FixedForm";
import HomeContact from "../home-contact/HomeContact";
import CommonHeader from "../../common-header/CommonHeader";
import ErrorBoundary from "../../error-boundry/ErrorBoundries";
import TopFooter from "../../footer/TopFooter";

function Home() {
  return (
    <div>
      <CommonHeader />
      <HomeBanner />
      <TopProperties />
      <TopLocalities />
      <TopProjectCity />
      <BuildersSlider myClass={"home_top_builders"} />
      <HomeContact />
      <Faq />
      <TopFooter />
      <FixedForm />
    </div>
  );
}

export default Home;
