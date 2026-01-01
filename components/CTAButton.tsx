import Link from "next/link";

interface CTAButtonProps {
  text: string;
  link: string;
}

export default function CTAButton({ text, link }: CTAButtonProps) {
  return (
    <Link href={link}>
      <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg">
        {text}
      </button>
    </Link>
  );
}
