declare type truck = {
    name: string;
    text: string;
    image_url: string;
};

export const trucks: truck[] = [
    {
        name: "Samochody dostawcze (busy)",
        text: "Mniejsze pojazdy, które świetnie sprawdzają się w miejscach niedostępnych dla większych ciężarówek. Gwarantują szybki transport, idealny do pilnych zleceń, zapewniając elastyczność i wygodę.",
        image_url: "/bus.png",
    },
    {
        name: "Samochody ciężarowe (solówki)",
        text: "Solówki to pojazdy o dużej ładowności, idealne do transportu różnorodnych towarów. Często występują w zestawie z windą i paleciakiem, co ułatwia załadunek i rozładunek. Dzięki tej konfiguracji są wszechstronne i sprawdzają się w różnych specyficznych zleceniach.",
        image_url: "/solówka.png",
    },
    {
        name: "Ciągniki siodłowe z naczepami (standard 13.6)",
        text: "Posiadamy naczepy o standardowej długości 13,6 m, które umożliwiają transport dużych ładunków. Dzięki różnym typom naczep, w tym plandekom, firankom i izotermom, możemy przewozić towary wymagające różnych warunków. Naczepy te umożliwiają również załadunek górny, co zwiększa elastyczność transportu.",
        image_url: "/standard naczepa.png",
    },
    {
        name: "Platformy",
        text: "Naczepy platformowe doskonale sprawdzają się w transporcie maszyn budowlanych, pojazdów i innych ponadgabarytowych towarów, które wymagają specjalistycznego podejścia.",
        image_url: "/platforma.png",
    },
    {
        name: "Niskopodwoziowe",
        text: "Naczepy niskopodwoziowe przeznaczone do transportu ciężkich ładunków, jak maszyny czy konstrukcje stalowe, wymagają specjalnych rozwiązań transportowych, dzięki obniżonej platformie.",
        image_url: "/pojazd specjalistyczny.png",
    },
    {
        name: "Wywrotki, cysterny, silosy",
        text: "Wykorzystywane do transportu materiałów sypkich, cieczy, gazów oraz substancji niebezpiecznych, zapewniają bezpieczny i efektywny transport różnych ładunków, takich jak materiały budowlane, chemikalia czy produkty spożywcze.",
        image_url: "/wywrotka.png",
    },
    {
        name: "Pozostałe",
        text: "naczepa podkontenerowa, ruchoma podłoga, mulda, jumbo, hakówka, laweta.",
        image_url: "/cysterna.png",
    }
]