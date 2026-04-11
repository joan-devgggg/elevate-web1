import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import elevateLogo from "@/assets/Logo estilizado en tonos azules.png";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20web";
const PHONE_URL = "tel:+34644610120";

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#casos", label: "Ejemplos" },
  { href: "#pricing", label: "Precio" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src={elevateLogo} 
            alt="Elevate Web" 
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#hero"
            className="gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Quiero mi web en 48h
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-border">
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="gradient-bg flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white shadow-lg w-full"
            >
              Quiero mi web en 48h
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
