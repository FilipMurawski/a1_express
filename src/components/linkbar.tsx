"use client"
import { useState } from "react";
import Button from "./button";
import { Hamburger } from "./hamburger";
import Link from "next/link";
import Image from "next/image";

declare type document = {
    title: string,
    id: string,    
}


const Linkbar = ({ documents }: { documents: document[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <Link href="/">
          <Image src="/" alt="Logo" className="h-16 w-auto" width={64} height={64}/>
        </Link>

        <ul className="hidden md:flex space-x-8">
          {documents.map((document) => (
            <li key={document.id} className={`text-gray-300 hover:text-yellow-500 font-medium transition duration-200 active:text-yellow-500 `}>
              <Link href={document.id}>{document.title}</Link>
            </li>
          ))}
        </ul>

        <Hamburger active={isMenuOpen} setActive={setIsMenuOpen} />
          <Button type="button" width={"160px"} reference={"/"}>
            {"Strona główna"}
          </Button>

      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-md absolute top-16 left-0 w-full flex flex-col items-center py-4 space-y-4">
          {documents.map((document) => (
            <Link href={document.id} key={document.id}>{document.title}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export { Linkbar };
