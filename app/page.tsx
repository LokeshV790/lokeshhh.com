import Particles from "@/components/Particles";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
    </main>
  );
}
