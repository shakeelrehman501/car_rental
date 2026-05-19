import Navbar from "@/components/navbar/Navbar";
import { bricolage, poppins } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/service/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col  ${bricolage.variable} ${poppins.variable}`}>
        <Navbar/>
        <main>
          {children}
          </main>
        <Footer/>
        </body>
    </html>
  );
}


