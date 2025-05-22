import AboutGolestan from "./AboutGolestan";
import GolestanPistachios from "./GolestanPistachios";
import GolestanRice from "./GolestanRice";
import GolestanTea from "./GolestanTea";
import Header from "./Header";
import Pistachios from "./Pistachios";
import Rice from "./Rice";
import Social from "./Social";
import Tea from "./Tea";
import Charitable from "./Charitable";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app overflow-x-hidden">
      <Header />
      <AboutGolestan />
      <Rice />
      <GolestanRice />
      <Tea />
      <GolestanTea />
      <Pistachios />
      <GolestanPistachios />
      <Social />
      <Charitable />
      <Footer />
    </div>
  );
};

export default App;
