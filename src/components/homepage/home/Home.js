import React from "react";
import HomeBanner from "../home-banner/HomeBanner";
import TopProperties from "../top-properties/TopProperties";
import TopLocalities from "../top-localities/TopLocalities";

function Home() {
  return (
    <div>
      <HomeBanner />
      <TopProperties />
      <TopLocalities />
    </div>
  );
}

export default Home;
