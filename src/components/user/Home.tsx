import React from "react";

import { FloatButton } from "antd";

import FirstSection from "./home/FirstSection";
import SecondSection from "./home/SecondSection";

const Home = () => {
  return (
    <main className="">
      <FirstSection />
      <SecondSection />
      <FloatButton.BackTop />
    </main>
  );
};

export default Home;
