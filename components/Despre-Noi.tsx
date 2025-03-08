"use client";

import { Button } from "./ui/button";

const DespreNoi = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="despre-noi" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Despre noi – hiFLY-STUDIO 🚀
        </h2>
        <p className="text-lg leading-relaxed">
          La <strong>hiFLY-STUDIO</strong>, ducem filmarea la un alt nivel – la
          propriu! Suntem o echipă pasionată de cinematografie aeriană,
          specializată în <strong>filmări FPV (First Person View)</strong> cu
          drone de ultimă generație.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Cu o combinație între tehnologie de vârf și o viziune artistică unică,
          surprindem imagini spectaculoase din unghiuri imposibile pentru
          camerele tradiționale.
        </p>

        <h3 className="text-2xl font-semibold mt-8">💨 De ce hiFLY-STUDIO?</h3>
        <ul className="mt-4 text-lg text-left mx-auto max-w-md">
          <li className="flex items-center gap-2">
            ✅{" "}
            <span>Experiență vastă în pilotaj FPV și filmare profesională</span>
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>Echipamente de ultimă generație</span>
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>Flexibilitate în adaptarea la orice tip de proiect</span>
          </li>
          <li className="flex items-center gap-2">
            ✅ <span>Creativitate și pasiune pentru fiecare cadru</span>
          </li>
        </ul>

        <p className="mt-6 text-lg">
          Dacă vrei să îți transformi viziunea în realitate și să obții imagini
          aeriene impresionante, hai să colaborăm! 🚁🎬
        </p>

        <Button
          className="mt-12 text-lg"
          variant="secondary"
          onClick={scrollToContact}
        >
          📩 Contactează-ne
        </Button>
      </div>
    </section>
  );
};

export default DespreNoi;
