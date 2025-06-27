"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Users, Scroll, Home, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/reinos", label: "Reinos", icon: Shield },
    { href: "/povos", label: "Povos", icon: Users },
    { href: "/historia", label: "História", icon: Scroll },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b-2 border-amber-600/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 text-amber-200 hover:text-amber-100 transition-colors group"
          >
            <div className="relative flex-shrink-0">
              <Crown className="h-8 w-8 md:h-10 md:w-10 text-amber-500 group-hover:text-amber-400 transition-colors" />
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-lg group-hover:bg-amber-400/30 transition-colors"></div>
            </div>
            <div className="min-w-0">
              <div className="text-xl md:text-2xl font-bold font-cinzel tracking-wide">
                <span className="hidden sm:inline">Lendas do Velho Mundo</span>
                <span className="sm:hidden">LVM</span>
              </div>
              <div className="text-xs text-amber-400 font-sans tracking-widest hidden md:block uppercase">
                Crônicas da Era do Bronze
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-sans font-semibold tracking-wide border-2",
                    isActive
                      ? "bg-amber-600/20 text-amber-200 border-amber-600/50 shadow-lg shadow-amber-600/25"
                      : "text-stone-300 hover:bg-stone-800/50 hover:text-amber-200 border-transparent hover:border-stone-600/50"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "p-3 rounded-lg transition-all duration-300 border-2",
                    isActive
                      ? "bg-amber-600/20 text-amber-200 border-amber-600/50"
                      : "text-stone-300 hover:bg-stone-800/50 hover:text-amber-200 border-transparent"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
