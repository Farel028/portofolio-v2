import "./globals.css";

export const metadata = {
  title: "Farel AS | Portfolio",
  description: "GSAP intro + Floating navbar + Experience + Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
