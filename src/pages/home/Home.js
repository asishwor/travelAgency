import React from "react";
import Hero from "../../Components/banner/Banner";
import Cta from "../../Components/CTA/Cta";
import Destination from "../../Components/destination/Destination";
import PopularDestination from "../../Components/PopularDestination/PopularDestination";
import Recommended from "../../Components/Recommended/Recommended";
import Search from "../../Components/search/Search";
import Testimonials from "../../Components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Destination />
      <PopularDestination />
      <Recommended />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default Home;
