import Hero from "@/components/Home";
import Portofoliu from "@/components/Portofoliu";

export default function Home() {
  return (
    <div className='flex flex-col justify-center gap-12 '>
      <Hero />
      <Portofoliu />
    </div>
  );
}
