import { DownloadApp } from "./DownloadApp";
import { Features } from "./Features";
import { HeroSection } from "./HeroSection";
import { Services } from "./Services";
import { WhoAreWe } from "./WhoAreWe";


export function Home() {
  return (
    <>
      <HeroSection />
      <WhoAreWe />
      <Features />
      <Services />
      <DownloadApp />
  </>
  )
}
