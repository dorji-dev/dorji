import HeaderComponent from "@/components/header-component";
import HeroComponent from "@/components/hero-component";
import AboutComponent from "@/components/about-component";
import ReposComponent from "@/components/repos-component";
import ContactComponent from "@/components/contact-component";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />
      <main>
        <HeroComponent />
        <AboutComponent />
        <ReposComponent />
        <ContactComponent />
      </main>
    </div>
  );
}
