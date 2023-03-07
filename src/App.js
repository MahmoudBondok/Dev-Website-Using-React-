import './App.css';
import Articles from './Components/Articles/Articles';
import Discount from './Components/Discount/Discount';
import Events from './Components/Events/Events';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Stats from './Components/Stats/Stats';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import Videos from './Components/Videos/Videos';
import Work from './Components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Skills />
      <Work />
      <Events />
      <Pricing />
      <Videos />
      <Stats />
      <Discount />
      <Footer />
    </div>
  );
}
export default App;