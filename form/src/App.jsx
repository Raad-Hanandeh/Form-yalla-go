import Flight from "./components/Flight"
import GuideMe from "./components/GuideMe"
import Hotel from "./components/Hotel"

import Transportation from "./components/Transportation"
import Footer from './components/footer'

function App() {

  return (
    <div>

      <Flight />
      <Footer />

      <Transportation/>
      <Footer />
      
      <GuideMe/>
      <Footer />
    
      <Hotel/>
      <Footer />

    </div>
)
}

export default App
