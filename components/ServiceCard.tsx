import { JSX } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start space-y-4">
      {icon && <div className="text-orange-500 text-3xl">{icon}</div>}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
