
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-11 h-8 bg-data-blue rounded-md flex items-center justify-center overflow-hidden">
            <span className="text-white font-bold text-lg">P_A</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
          <span className="text-data-blue">Pelz</span>
            _the_<span className="text-data-blue">Analyst</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
          <Button className="bg-data-blue hover:bg-data-blue-dark text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 rounded-md focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-data-blue hover:bg-data-blue-dark text-white mt-2">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
