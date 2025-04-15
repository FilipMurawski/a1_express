import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Icon from "@/components/icon";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import Slider from "@/components/slider";
import { headers } from "@/lib/static/headers";
import { trucks } from "@/lib/static/trucks";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar headers={headers}/>
<section id="home" className="bg-gray-900 h-[60vh] sm:h-[80vh] md:h-screen flex flex-col">
  {/* Image Section */}
  <div className="relative w-full flex-grow mt-14 md:mt-16">
    <Image
      src="/Tapeta.jpg"
      alt="Truck on the road"
      fill
      className="w-full object-cover sm:object-center"
    />
  </div>

  {/* Text Section */}
  <div className="w-full bg-gray-900 text-center p-5 pt-0 sm:pt-5">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
      A1 Express
    </h1>
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 font-medium mt-4">
      Bezpieczny i terminowy transport dostosowany do Twoich potrzeb
    </h2>
  </div>
</section>
    <Section id="dlaczego" wrap="no-wrap">     
    <Image src="/dlaczego.jpg" alt="handshake" className="w-[100%] lg:w-[60%] min-w-[16rem] lg:-translate-x-20  -translate-y-17 lg:translate-y-0 scale-120" width={1200} height={600}/>
      <div className="w-[100%] lg:w-[55%] flex justify-center items-center space-y-10 flex-col">
        <Header size="big"> Dlaczego warto z nami współpracować?</Header>
        <Header size="small">Bezpieczeństwo Twojego towaru to nasz priorytet. Gwarantujemy pełne zabezpieczenie ładunku na każdym etapie transportu, abyś miał pewność, że dotrze do celu w nienaruszonym stanie.</Header>
        <div className="flex justify-center items-start w-full sm:space-x-[10%] space-y-[10%] sm:w-[80%] text-[var(--primary-text-color)] flex-col sm:flex-row sm:space-y-0 ">
          <div className="flex justify-center flex-col items-center w-full sm:min-w-[calc(100%/4)] lg:min-w-[calc(84%/4)] gap-4">
          <Icon viewbox="0 0 640 512" d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4L224 224l-114.7 0 9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L224 288l0 114.7-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4L288 288l114.7 0-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L288 224l0-114.7 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"/> 
          <p>Elastyczność – Nasze transporty krajowe i międzynarodowe są dostosowane do specyfiki Twojej branży i indywidualnych potrzeb.</p>
          </div>
          <div className="flex justify-center flex-col items-center min-w-[calc(100%/4)] lg:min-w-[calc(84%/4)] gap-4">
          <Icon viewbox="0 0 640 512" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/>
           <p>Zaufanie – Dzięki nowoczesnej flocie i doświadczonym kierowcom, masz pewność, że Twój transport przebiegnie bez zakłóceń.</p>
           </div>
          <div className="flex justify-center flex-col items-center min-w-[calc(100%/4)] lg:min-w-[calc(84%/4)] gap-4">
          <Icon viewbox="0 0 640 512" d="M0 32C0 14.3 14.3 0 32 0l72.9 0c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64 32 64C14.3 64 0 49.7 0 32zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z"/> 
          <p> Szeroka oferta – Obsługujemy towary niebezpieczne, chłodnicze i ponadgabarytowe, zapewniając kompleksową obsługę nawet trudnych zleceń.</p>
          </div>
          <div className="flex justify-center flex-col items-center min-w-[calc(100%/4)] lg:min-w-[calc(84%/4)] gap-4">
          <Icon viewbox="0 0 640 512" d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
           <p> Pełna obsługa – Nasz zespół specjalistów dba o każdy etap transportu, od planowania trasy po finalną dostawę.</p>
           </div>
        </div>
      </div>
    </Section>
    <Section id="flota" wrap="wrap">
        <Header size="big"> Nowoczesna flota – transport dostosowany do Twoich potrzeb</Header>
        <Header size="small">Flota pojazdów A1 Express to kluczowy element, który umożliwia nam dostarczanie towarów na najwyższym poziomie. Dostosowujemy nasze pojazdy do specyfiki zlecenia, zapewniając bezpieczeństwo i efektywność przewozów. Dysponujemy szeroką gamą pojazdów, które umożliwiają realizację nawet najbardziej wymagających zleceń:</Header>
        <Slider trucks={trucks}></Slider>
    </Section>
    <Section id="offer" wrap="no-wrap">
      <Image src="/o_nas.jpg" alt="white truck with gas hose" className="w-[80%] sm:w-[60%] min-w-[16rem] sm:-translate-x-20" width={1200} height={600}/>
      <div className="w-[80%] sm:w-[50%] min-w-52 flex justify-center items-center space-y-10 flex-col">
        <Header size="big" classt="text-left"> A1 Express – Twój pewny partner w transporcie</Header>
        <Header size="small" classt="text-left">A1 Express to zespół doświadczonych specjalistów łączących tradycję z nowoczesnością. Dzięki różnorodnym kompetencjom i innowacyjnemu podejściu zapewniamy efektywne, ekologiczne i bezpieczne rozwiązania transportowe. Działamy elastycznie, stawiając na indywidualne podejście, terminowość i pełną kontrolę nad realizacją zleceń.</Header>
      </div>
    </Section>
    <Section id="kontakt" wrap="no-wrap">
    <div className="w-[80%] sm:w-[50%] min-w-52 flex justify-center items-center space-y-5 sm:space-y-10 flex-col">
      <Header size="big" classt="text-left">Potrzebujesz szybkiej wyceny lub chcesz omówić szczegóły transportu? Jesteśmy do Twojej dyspozycji:</Header>
      <Header size="small">Telefon:  +48 797-581-381</Header>
      <Header size="small">Email:  <a href="mailto:biuro@A1Express.pl">biuro@A1Express.pl</a></Header>
      </div>
    <Image src="/call_center.webp" alt="young man smiling and speaking" className="w-[80%] sm:w-[50%] min-w-[16rem]" width={1200} height={600}/>
    </Section>
    <Section id="form" wrap="wrap">
      <Header size="big">Masz pytania? Skontaktuj się z nami!</Header>
      <Contact />
    </Section>
    <Footer type="front"/>
    </>
  );
}
