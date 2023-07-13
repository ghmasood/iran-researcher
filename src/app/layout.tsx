import Footer from "components/UI/Footer";
import "../assets/styles/globals.scss";
import localFont from "next/font/local";

const dana = localFont({
  src: "../assets/fonts/dana2webGX.woff",
  variable: "--font-dana",
});

export const metadata = {
  title: "Iran Researcher",
  description: "Make a decision based on data",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.className}`}>
        <div className="min-h-screen h-full py-8 flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
