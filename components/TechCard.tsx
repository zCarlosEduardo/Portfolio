import { Tecnologia } from "@/lib/tecnologias";

interface TechnologiaCardProps {
  technologia: Tecnologia;
}

export function TechCard({ technologia }: TechnologiaCardProps) {
  const Icon = technologia.icon;

  return (
    <article
      className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg min-w-[150px] h-[180px] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
      style={{
        backgroundColor: technologia.color,
        boxShadow: `0 4px 12px ${technologia.color}40, 0 0 8px ${technologia.color}`,
      }}
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div
        className="w-20 h-20 mb-4 flex items-center justify-center text-white text-6xl"
        aria-label={`Ícone da tecnologia ${technologia.name}`}
      >
        {typeof Icon === 'function' ? <Icon /> : Icon}
      </div>
      <span
        className="text-white font-semibold text-center text-sm bg-white/10 px-2 py-1 rounded backdrop-blur-sm"
        itemProp="name"
      >
        {technologia.name}
      </span>
    </article>
  );
}