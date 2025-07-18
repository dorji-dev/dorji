import HeaderComponent from "@/components/header-component";
import HeroComponent from "@/components/hero-component";
import AboutComponent from "@/components/about-component";
import ReposComponent from "@/components/repos-component";
import ContactComponent from "@/components/contact-component";

export default function Home() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <HeaderComponent />
      <div className="flex-1 overflow-y-auto">
        <HeroComponent />
        <AboutComponent />
        <ReposComponent />
        <ContactComponent />
      </div>
    </div>
  );
}
