import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ProcessLoop from "@/components/ProcessLoop";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";
import BuildingWithAI from "@/components/BuildingWithAI";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import { checkHasPhoto } from "@/lib/hasPhoto";

export default function Home() {
  const hasPhoto = checkHasPhoto();

  return (
    <main className="bg-paper">
      <ScrollProgress />
      <Nav hasPhoto={hasPhoto} />
      <Hero hasPhoto={hasPhoto} />
      <ImpactStats />
      <ProcessLoop />
      <Toolkit />
      <Work />
      <BuildingWithAI />
      <Career />
      <Contact />
    </main>
  );
}
