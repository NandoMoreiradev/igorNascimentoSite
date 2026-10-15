import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
