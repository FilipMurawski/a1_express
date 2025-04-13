'use client';
import React, { useState } from 'react';

const Page = () => {
    // State to manage the current language
    const [language, setLanguage] = useState<'PL' | 'EN'>('PL');
  
    // Toggle language handler
    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'PL' ? 'EN' : 'PL'));
    };
    return (
      <div className="flex flex-col items-center gap-4 justify-center min-h-screen p-4 bg-[var(--background)] text-[var(--foreground)]">
        <h1 className="text-2xl font-bold mb-4">{language === "PL" ? "Ogólne Warunki Współpracy - Zleceniobiorca" : "A1 GENERAL TERMS OF COOPERATION - CONTRACTOR"}</h1>
        <button onClick={toggleLanguage} className='mb-4 px-4 py-2 bg-[var(--primary-color)] text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--primary-color-dark)] transition-colors'>
        {language === 'PL' ? 'English version' : 'Polska wersja'}
      </button>

        <embed
          src={language === "PL" ? "/A1 OGÓLNE WARUNKI WSPÓŁPRACY - ZLECENIOBIORCA.pdf" : "/A1 OGÓLNE WARUNKI WSPÓŁPRACY - ZLECENIOBIORCA (EN).pdf"}
          type="application/pdf"
          className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg"
        />
        <a
          href={language === "PL" ? "/A1 OGÓLNE WARUNKI WSPÓŁPRACY - ZLECENIOBIORCA.pdf" : "/A1 OGÓLNE WARUNKI WSPÓŁPRACY - ZLECENIOBIORCA (EN).pdf"}
          download
          className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--primary-color-dark)] transition-colors"
        >
          {language === "PL" ? "Pobierz dokument" : "Download document"}
        </a>
      </div>
    );
}

export default Page;