export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
        <p>© {new Date().getFullYear()} Sentinel Systems. All Rights Reserved.</p>
        <p>
          GitHub: <a href="https://github.com/oliver-mahonga" className="underline">View Projects</a> | Telegram: <a href="https://t.me/elenasaida" className="underline">t.me/elenasaida</a>
        </p>
      </div>
    </footer>
  );
}
