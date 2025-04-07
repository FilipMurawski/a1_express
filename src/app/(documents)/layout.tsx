import { Footer } from "@/components/footer";
import { Linkbar } from "@/components/linkbar";
import { documents } from "@/lib/static/documents";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>        
        <Linkbar documents={documents}/>
        <div className="pt-16">
        {children}
        <Footer type="front"></Footer>
        </div>
      </>
  );
}
