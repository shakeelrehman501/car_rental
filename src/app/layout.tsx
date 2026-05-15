import Navbar from "@/components/navbar/Navbar";
import { bricolage } from "@/lib/fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className={`min-h-screen flex flex-col bg-primary dark:bg-secondary ${bricolage.variable}`}>
        <Navbar/>
        <main>
          {children}
          </main>
        </body>
    </html>
  );
}
