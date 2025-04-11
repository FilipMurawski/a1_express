import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Icon from "@/components/icon";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { headers } from "@/lib/static/headers";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar headers={headers}/>
    <section>
      <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Tapeta.jpg')" }}>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-5xl font-bold">Profesjonalny Transport Krajowy i Międzynarodowy</h1>
          <h2 className="mt-4 text-2xl">Bezpieczny, terminowy i elastyczny transport dostosowany do Twoich potrzeb</h2>
        </div>
      </div>
    </section>
    <Section id="dlaczego" wrap="no-wrap">
      <Image src="/dlaczego.jpg" alt="young man" className="w-[80%] sm:w-[50%] min-w-[16rem] sm:-translate-x-20" width={1200} height={600}/>
      <div className="w-[50%] min-w-52 flex justify-center items-center space-y-10 flex-col">
        <Header size="big"> Dlaczego warto z nami współpracować?</Header>
        <Header size="small">Bezpieczeństwo Twojego towaru to nasz priorytet. Gwarantujemy pełne zabezpieczenie ładunku na każdym etapie transportu, abyś miał pewność, że dotrze do celu w nienaruszonym stanie.</Header>
        <div className="flex justify-center items-start space-x-[10%] space-y-[10%] w-[100%] text-gray-400 flex-col sm:flex-row sm:space-y-0 ">
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="A book" src="/Book.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p>Elastyczność – Nasze transporty krajowe i międzynarodowe są dostosowane do specyfiki Twojej branży i indywidualnych potrzeb.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Icon viewbox="0 0 640 512" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/> <p>Zaufanie – Dzięki nowoczesnej flocie i doświadczonym kierowcom, masz pewność, że Twój transport przebiegnie bez zakłóceń.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="magnifying glass" src="/Magnifying Glass.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p> Szeroka oferta – Obsługujemy towary niebezpieczne, chłodnicze i ponadgabarytowe, zapewniając kompleksową obsługę nawet trudnych zleceń.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="magnifying glass" src="/Magnifying Glass.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p> Pełna obsługa – Nasz zespół specjalistów dba o każdy etap transportu, od planowania trasy po finalną dostawę.</p></div>
        </div>
      </div>
    </Section>
    <Section id="flota" wrap="wrap">
        <Header size="big"> Dlaczego warto z nami współpracować?</Header>
        <Header size="small">Bezpieczeństwo Twojego towaru to nasz priorytet. Gwarantujemy pełne zabezpieczenie ładunku na każdym etapie transportu, abyś miał pewność, że dotrze do celu w nienaruszonym stanie.</Header>
        <div className="flex justify-center items-start space-x-[10%] space-y-[10%] w-[100%] text-gray-400 flex-col sm:flex-row sm:space-y-0 ">
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="A book" src="/Book.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p>Elastyczność – Nasze transporty krajowe i międzynarodowe są dostosowane do specyfiki Twojej branży i indywidualnych potrzeb.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Icon viewbox="0 0 640 512" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/> <p>Zaufanie – Dzięki nowoczesnej flocie i doświadczonym kierowcom, masz pewność, że Twój transport przebiegnie bez zakłóceń.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="magnifying glass" src="/Magnifying Glass.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p> Szeroka oferta – Obsługujemy towary niebezpieczne, chłodnicze i ponadgabarytowe, zapewniając kompleksową obsługę nawet trudnych zleceń.</p></div>
          <div className="flex justify-center flex-col items-center min-w-[calc(84%/4)] gap-4"><Image alt="magnifying glass" src="/Magnifying Glass.png" className="w-16 h-16 grayscale-0" width={64} height={64}/> <p> Pełna obsługa – Nasz zespół specjalistów dba o każdy etap transportu, od planowania trasy po finalną dostawę.</p></div>
        </div>
    </Section>
    <Section id="kontakt" wrap="no-wrap">
    <div className="w-[50%] min-w-52 flex justify-center items-center space-y-10 flex-col">
      <Header size="big">Potrzebujesz szybkiej wyceny lub chcesz omówić szczegóły transportu? Jesteśmy do Twojej dyspozycji:</Header>
      <Header size="small">Telefon:  +48 797-581-381</Header>
      <Header size="small">Email:  <a href="mailto:biuro@A1Express.pl">biuro@A1Express.pl</a></Header>
      </div>
    <Image src="/call_center.webp" alt="young man" className="w-[80%] sm:w-[50%] min-w-[16rem]" width={1200} height={600}/>
    </Section>
    <Section id="form" wrap="wrap">
      <Header size="big">Masz pytania? Skontaktuj się z nami!</Header>
      <Contact />
    </Section>
    <Footer type="front"/>
    </>
  );
}
