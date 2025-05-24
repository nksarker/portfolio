import FooterSection from "./sections/FooterSection";
import TestimonialSection from "./sections/TestimonialSection";
import TopSection from "./sections/TopSection"
import UISection from "./sections/UISection"
import WebSection from "./sections/WebSection";

const App = () => {
  return (
    <div className="containermx-auto py-8">
      <TopSection />
      <UISection />
      <WebSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  )
}

export default App;