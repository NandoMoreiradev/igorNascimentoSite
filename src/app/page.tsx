import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Videos } from "@/components/Videos";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Brands />
        <Events />
        <Videos />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
