import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import FoldSection from './sections/FoldSection'
import IntroSection from './sections/IntroSection'
import VisualMenuSection from './sections/VisualMenuSection'
import SocialProofSection from './sections/SocialProofSection'
import ExtrasSection from './sections/ExtrasSection'
import FooterSection from './sections/FooterSection'

const pages = [ 'Navigation-1', 'Navigation-2', 'Navigation-3', 'Navigation-4' ]

export default function App() {

  return (
    <>
      {/* / Header / */}
      <Header pages={pages} />

      {/* / Hero Section / */}
      <HeroSection />

      {/* / Fold / */}
      <FoldSection />

      {/* / Introduction / */}
      <IntroSection />

      {/* / Offerings Directory aka Visual Menu / */}
      <VisualMenuSection />

      {/* / Social Proof / */}
      <SocialProofSection />

      {/* / Extras / */}
      <ExtrasSection />

      {/* / Footer / */}
      <FooterSection />
    </>
  )
}

