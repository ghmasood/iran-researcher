import "./globals.css";
import localFont from "next/font/local";

const dana = localFont({
  src: "fonts/dana2webGX.woff",
  variable: "--font-dana",
});

export const metadata = {
  title: "Iran Researchers",
  description: "Make a decision based on data",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`${dana.className} bg-primary`}>{children}</body>
    </html>
  );
}
