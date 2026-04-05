import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { Craft } from "@/components/Craft";
import { Reviews } from "@/components/Reviews";
import { DeliMenu } from "@/components/DeliMenu";
import { MeatCase } from "@/components/MeatCase";
import { ShopUpdates } from "@/components/ShopUpdates";
import { PartyTrayForm } from "@/components/PartyTrayForm";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Heritage />
        <Craft />
        <Reviews />
        <DeliMenu />
        <MeatCase />
        <ShopUpdates />
        <PartyTrayForm />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
