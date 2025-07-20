import HeroComponent from "@/components/hero-component";
import AboutComponent from "@/components/about-component";
import ReposComponent from "@/components/repos-component";
import ContactComponent from "@/components/contact-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <ReposComponent />
      <ContactComponent />
    </>
  );
}
