import Contact from "@/components/Contact";
import DespreNoi from "@/components/Despre-Noi";
import Hero from "@/components/Home";
import Portofoliu from "@/components/Portofoliu";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      {/* Hero section */}
      <section id="hero" className="bg-black">
        <Hero />
      </section>

      {/* Portfolio section with deep violet gradient */}
      <section
        id="portofoliu"
        className="bg-gradient-to-b from-black to-[#0F0014] py-16"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(76,29,149,0.08), transparent 70%)",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        ></div>
        <Portofoliu />
      </section>

      {/* About section with darker violet */}
      <section id="despre-noi" className="bg-[#0A000F] py-16">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(49,16,89,0.05), transparent 50%)",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        ></div>
        <DespreNoi />
      </section>

      {/* Contact section with deep violet to black */}
      <section
        id="contact"
        className="bg-gradient-to-b from-[#0F0014] to-black py-16"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.1,
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        ></div>
        <Contact />
      </section>
    </div>
  );
}
