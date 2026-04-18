import { MessageCircle } from "lucide-react";
import elevateLogo from "@/assets/Logo estilizado en tonos azules.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <img 
              src={elevateLogo} 
              alt="Elevate Web" 
              className="h-8 w-auto object-contain"
            />
            <div className="text-xl font-bold text-foreground">Elevate Web</div>
            <p className="text-sm text-muted-foreground md:ml-2">Tu web profesional sin complicaciones</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://wa.me/34644610120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              644 610 120
            </a>
            <span className="hidden sm:block">·</span>
            <a href="mailto:ellevateweb@gmail.com" className="hover:text-foreground transition-colors">
              ellevateweb@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Elevate Web. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
