import React from "react";
import { Navbar } from "../components/Navbar";
import { HomeBg } from "../components/HomeBg";
import { IntroductionSec } from "../components/IntroductionSec";
import { ServicesSec } from "../components/ServicesSec";
import { WhyUsSec } from "../components/WhyUsSec";
import { HappyCustomerSec } from "../components/HappyCustomerSec";
import { GetInTouch } from "../components/GetInTouch";
import { Footer } from "../components/Footer";
import { QuickLinkSec } from "../components/QuickLinkSec";
import { NewsSec } from "../components/news/NewsSec";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <HomeBg />
      <NewsSec />
      <IntroductionSec />
      <ServicesSec />
      <WhyUsSec />
      <HappyCustomerSec />
      <GetInTouch />
      <QuickLinkSec />
      <Footer />
    </div>
  );
};
