import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="/assets/images/logo.png" alt="Sentinel Systems" className="h-10" />
        </Link>
        <b className="text-red">Sentinel systems</b>

        <div className="space-x-6 text-white font-medium hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/proof">Proof</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
