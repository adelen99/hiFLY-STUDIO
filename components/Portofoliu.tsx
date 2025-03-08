import React from "react";
import { CarouselPortofoliu } from "./carousel";
import { Separator } from "@/components/ui/separator";

const Portofoliu = () => {
  return (
    <section id="portofoliu" className="flex flex-col items-center  pt-10">
      {/* Titlu stilizat */}
      <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
        Descoperă munca noastră
      </h1>

      {/* Linie separator pentru efect vizual */}
      <Separator className="my-6 w-24 bg-primary" />

      {/* Carusel */}
      <div className="w-full max-w-4xl">
        <CarouselPortofoliu />
      </div>
    </section>
  );
};

export default Portofoliu;
