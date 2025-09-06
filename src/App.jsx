import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MallSection from './components/MallSection';
import AttractionsSection from './components/AttractionsSection';
import ExperiencesSection from './components/ExperiencesSection';
import CreateExperience from './components/CreateExperience';
import Footer from './components/Footer';
import './App.css';
import MapSection from './components/MapSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MallSection />
      <AttractionsSection />
      <ExperiencesSection />
      <CreateExperience />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;