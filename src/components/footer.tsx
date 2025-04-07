import Link from "next/link"
import { Header } from "./header"
import Image from "next/image"
import { documents } from "@/lib/static/documents"

const Footer = ({type}: {type: "front" | "panel"}): React.ReactNode => {
    return (
        <div className={` pt-16 ${type === "front" ? "mx-auto px-4 md:px-24 lg:px-8" : ""} sm:max-w-xl md:max-w-full lg:max-w-screen-xl `}>
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="#start" aria-label="Go home" title="Company" className="inline-flex items-center">
        <Image className="w-12 h-12 mr-4" src="/logo.jpg" alt="Logo Goldskill" width={48} height={48}/>
        <Header size="big">A1 Express</Header>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">
         Jakiś fajny tekst
        </p>
        <p className="mt-4 text-sm text-gray-800">
        Jakiś kolejny fajny tekst?
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">Kontakt</p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a href="mailto:biuro@a1express.pl" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-blue-400 hover:text-purple-700">biuro@a1express.pl</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Telefon:</p>
        <p aria-label="Nasz NIP" className="transition-colors duration-300 text-blue-400">
          +48 797-581-381
        </p>
      </div>

    </div>
    <div>
      <p className="mt-4 text-sm text-gray-500">
        Jakieś socjale?
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright 2025 A1 Express. Wszystkie prawa zastrzeżone.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {documents.map((doc) => {
            return (
              <li key={doc.id}>
                <Link href={doc.id} className="text-sm text-gray-600 transition-colors duration-300 hover:text-yellow-500">
                  {doc.title}
                </Link>
              </li>
            )
          })}
    </ul>
  </div>
</div>
    )
}

export { Footer }