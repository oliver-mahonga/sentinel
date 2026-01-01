
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";


export const metadata = {
  title: "Sentinel Systems",
  description: "AI-driven website optimization and automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
