import { Navbar } from "./components/Navbar";
import "./App.css";
import { HomeBg } from "./components/HomeBg";
import { IntroductionSec } from "./components/IntroductionSec";
import { ServicesSec } from "./components/ServicesSec";
import { WhyUsSec } from "./components/WhyUsSec";
import { HappyCustomerSec } from "./components/HappyCustomerSec";
import { GetInTouch } from "./components/GetInTouch";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBg />
      <IntroductionSec />
      <ServicesSec />
      <WhyUsSec />
      <HappyCustomerSec />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
