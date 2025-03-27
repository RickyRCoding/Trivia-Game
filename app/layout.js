import "./globals.css";

export const metadata = {
  title: "Trivia Game",
  description: "Can you win?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
