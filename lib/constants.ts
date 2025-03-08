import { FaInstagram } from "react-icons/fa"; // Instagram icon from FontAwesome

// Interfața pentru nav links
interface navLinksProps {
  href: string;
  title: string;
  id: string;
}

// Linkurile pentru navigare
export const navLinks: navLinksProps[] = [
  { id: "portofoliu", href: "/portofoliu", title: "Portofoliu" },
  { id: "despre-noi", href: "/despre-noi", title: "Despre Noi" },
  { id: "contact", href: "/contact", title: "Contact" },
];
