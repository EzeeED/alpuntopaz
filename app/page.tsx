import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Orders from "@/components/Orders";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ThreadDivider } from "@/components/Decor";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-vino focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <ThreadDivider />
        <About />
        <ThreadDivider />
        <Products />
        <ThreadDivider />
        <Orders />
        <ThreadDivider />
        <Testimonials />
        <ThreadDivider />
        <FAQ />
        <ThreadDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
