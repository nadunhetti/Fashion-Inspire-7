
import * as React from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Trends", href: "#trends" },
    { name: "Inspiration", href: "#inspiration" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="py-4 px-4 md:px-8 absolute top-0 left-0 right-0 z-50">
      <div className="container flex justify-between items-center">
        <a href="/" className="font-playfair text-2xl md:text-3xl font-bold">
          Fashion<span className="italic">Inspiration</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-montserrat text-sm uppercase tracking-wider hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 bg-white bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container h-full flex flex-col items-center justify-center">
          <button 
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-montserrat text-xl uppercase tracking-wider" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-8" variant="outline">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
