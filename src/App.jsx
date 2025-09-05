import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MallSection from './components/MallSection';
import AttractionsSection from './components/AttractionsSection';
import ExperiencesSection from './components/ExperiencesSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MallSection />
      <AttractionsSection />
      <ExperiencesSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;