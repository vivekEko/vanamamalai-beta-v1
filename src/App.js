import Footer from "./components/constantComponents/Footer";
import BootomHeader from "./components/constantComponents/Header/BootomHeader";
import Header from "./components/constantComponents/Header/Header";
import Activities from "./components/home/Activities";
import Donate from "./components/home/Donate";
import Gallery from "./components/home/Gallery";
import HeroBanner from "./components/home/HeroBanner";
import SmallCarousel from "./components/home/SmallCarousel";
import UpcommingEvents from "./components/home/UpcommingEvents";

function App() {
  return (
    <div className="cursor-default relative">
      <Header />
      <BootomHeader />
      <HeroBanner />
      <SmallCarousel />
      <UpcommingEvents />
      <Donate />
      <Activities />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
