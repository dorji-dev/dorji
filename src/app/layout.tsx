import { Metadata } from "next";
import { Ysabeau } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import Footer from "@/components/footer";

const ysabeau = Ysabeau({
  variable: "--font-ysabeau",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dorji Tshering",
  description: "Software engineer specializing in web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ysabeau.className} antialiased`}>
        <div className="max-w-2xl xl:max-w-3xl mx-auto px-8 flex flex-col min-h-[100dvh]">
          <HeaderComponent />
          <main className="flex-1 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
