import { Mail, Instagram } from "lucide-react";
import { TbBrandDiscord } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-stone-900 border-t-2 border-amber-600/50 mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
          {/* Copyright - Centered */}
          <div className="text-center md:flex-1">
            <p className="text-stone-300 font-sans text-sm">
              &copy; {new Date().getFullYear()} Lendas do Velho Mundo. Todos os
              direitos reservados.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://discord.gg/yfCCbByzND"
              target="_blank"
              className="group flex items-center justify-center w-10 h-10 bg-stone-800 hover:bg-amber-600/20 rounded-full border border-stone-600 hover:border-amber-500/50 transition-all duration-300"
              aria-label="Discord"
            >
              <TbBrandDiscord className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/punhadodedados/"
              target="_blank"
              className="group flex items-center justify-center w-10 h-10 bg-stone-800 hover:bg-amber-600/20 rounded-full border border-stone-600 hover:border-amber-500/50 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:questboard.rpg@gmail.com"
              className="group flex items-center justify-center w-10 h-10 bg-stone-800 hover:bg-amber-600/20 rounded-full border border-stone-600 hover:border-amber-500/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
