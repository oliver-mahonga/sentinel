import Link from "next/link";

interface CTAButtonProps {
  text: string;
  link: string;
}

export default function CTAButton({ text, link }: CTAButtonProps) {
  return (
    <Link href={link}>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-block">
        {text}
      </button>
    </Link>
  );
}
