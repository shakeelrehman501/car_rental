import Navbar from "@/components/navbar/Navbar";
import { bricolage } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/service/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`min-h-screen flex flex-col bg-primary dark:bg-secondary ${bricolage.variable}`}>
        <Navbar/>
        <main>
          {children}
          </main>
        {/* <Footer/> */}
        </body>
    </html>
  );
}


