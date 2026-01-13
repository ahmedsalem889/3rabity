import { Navigation } from "../components/Navigation"
import { HeroSection } from "../components/HeroSection"
import { WhoAreWe } from "../components/WhoAreWe"
import { Features } from "../components/Features"
import { Services } from "../components/Services"
import { DownloadApp } from "../components/DownloadApp"
import { Footer } from "../components/Footer"

export function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WhoAreWe />
      <Features />
      <Services />
      <DownloadApp />
      <Footer />
    </>
  )
}
