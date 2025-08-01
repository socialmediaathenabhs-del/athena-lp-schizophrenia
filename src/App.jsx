
import './App.css'
import CausesOfDepression from './Components/CausesOfDepression'
import Depression from './Components/Depression'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import OurFacility from './Components/OurFacility'
import StatsSection from './Components/StatsSection'
import TreatmentsForDepression from './Components/TreatmentsForDepression'
import VisualStories from './Components/VisualStories'
import WhyChooseAthena from './Components/WhyChooseAthena'
import YourHealingPartners from './Components/YourHealingPartners'

function App() {

  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <WhyChooseAthena/>
    <YourHealingPartners/>
    <Depression/>
    <CausesOfDepression/>
    <TreatmentsForDepression/>
    <VisualStories/>
    <FAQSection/>
    <OurFacility/>
    <Footer/>
    </>
  )
}

export default App
