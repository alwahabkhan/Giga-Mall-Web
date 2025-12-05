import Hero from '../components/Hero'
// import IconicBrands from '../components/IconicBrands'
// import ChooseCountry from '../components/ChooseCountry'
import ExperienceSection from '../components/ExperienceSection'
import TrendingSection from '../components/TrendingSection'
import LandingVideo from '../components/LandingVideo'
import NewBrandsSection from '../components/NewBrandsSection'
import Featured2Section from '../components/Featured2Section'

const HomePage = () => {
  return (
    <>
      <LandingVideo />
      <TrendingSection />
      <Featured2Section />
      <ExperienceSection />
      <NewBrandsSection />
      {/* <ChooseCountry /> */}
      {/* <IconicBrands /> */}
      <Hero />
    </>
  )
}

export default HomePage