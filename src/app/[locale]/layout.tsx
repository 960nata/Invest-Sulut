import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Analytics from "@/components/Analytics";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: "Forum Investasi SULUT",
  description: "North Sulawesi Integrated Investment Platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-[#001A33]" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {/* Google Translate Script */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,id,zh-CN,ja,ko,es,ru',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              }, 'google_translate_element');
            }
          `}
        </Script>

      </body>
    </html>
  );
}
