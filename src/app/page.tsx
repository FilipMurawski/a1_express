import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { headers } from "@/lib/static/headers";

export default function Home() {
  return (
    <>
    <Navbar headers={headers}/>
    <Contact />
    <Footer type="front"/>
    </>
  );
}
