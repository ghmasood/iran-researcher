import Footer from "components/Footer";
import "../assets/styles/globals.scss";
import localFont from "next/font/local";
import LayoutComponent from "components/Layout";

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
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
