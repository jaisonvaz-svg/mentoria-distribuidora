import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Benefits from "@/components/Benefits";
import Offer from "@/components/Offer";
import LeadForm from "@/components/LeadForm";
import Author from "@/components/Author";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Benefits />
      <Offer />
      <Author />
      <LeadForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}

