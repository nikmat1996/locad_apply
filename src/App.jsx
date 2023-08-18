import ControlTower from "./components/ControlTower"
import CustomerStories from "./components/CustomerStories"
import DeliveryMiles from "./components/DeliveryMiles"
import DescriptiveSection from "./components/DescriptiveSection"
import EmailSubscription from "./components/EmailSubscription"
import Insights from "./components/Insights"
import MainSection from "./components/MainSection"
import MapLocad from "./components/MapLocad"
import Navbar from "./components/Navbar"
import Numbers from "./components/Numbers"
import RollingAd from "./components/RollingAd"
import SignUp from "./components/SignUp"
import TrackingSection from "./components/TrackingSection"

function App() {

  return (
    <>
      <Navbar />
      <MainSection />
      <Numbers />
      <RollingAd />
      <DescriptiveSection />
      <TrackingSection />
      {/* <ControlTower /> */}
      {/* <DeliveryMiles /> */}
      {/* <EmailSubscription /> */}
      {/* <CustomerStories /> */}
      {/* <MapLocad /> */}
      {/* <Insights /> */}
      {/* <SignUp /> */}
    </>
  )
}

export default App

