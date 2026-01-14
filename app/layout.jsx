import "./globals.css";

export const metadata = {
  title: "Farel AS | Portfolio",
  description: "GSAP intro + Floating navbar + Experience + Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
