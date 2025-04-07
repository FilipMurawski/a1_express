"use client"
import { useEffect, useState } from "react";
import { Hamburger } from "./hamburger";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";

declare type header = {
  title: string;
  id: string;
};


const Navbar = ({ headers}: { headers: header[]}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      headers.forEach((header) => {
        const section = document.getElementById(header.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = header.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headers]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-8 flex justify-between items-center h-16">
        <Link href="/">
          <Image src="/logo.jpg" alt="Logo" className="h-16 w-auto" width={64} height={64}/>
        </Link>

        <ul className="hidden md:flex space-x-4 lg:space-x-10">
          {headers.map((header) => (
            <li key={header.id} className={`text-gray-300 hover:text-yellow-500 font-medium transition duration-200 active:text-yellow-500 ${
              activeSection === header.id ? "text-yellow-500" : "hover:text-yellow-500"
            }`}>
              <a href={`#${header.id}`} onClick={(e) => handleSmoothScroll(e, header.id)}>{header.title}</a>
            </li>
          ))}
        </ul>

        <Hamburger active={isMenuOpen} setActive={setIsMenuOpen} />
        <Button type="button" reference="#contact" width={"160px"}>Uzyskaj wycenę</Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-md absolute top-16 left-0 w-full flex flex-col items-center py-4 space-y-4">
          {headers.map((header) => (
            <a key={header.id} href={`#${header.id}`} onClick={(e) => handleSmoothScroll(e, header.id)} className={`text-gray-300 scroll-smooth hover:text-yellow-500 font-medium transition duration-200 active:text-yellow-500 ${
              activeSection === header.id ? "text-yellow-500" : "hover:text-yellow-500"
            }`}>
              {header.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export { Navbar };
