import Image from "next/image";
import { Tecnologia } from "@/lib/tecnologias";

interface TechnologiaCardProps {
    technologia: Tecnologia;
} 

export function TechCard ({ technologia }: TechnologiaCardProps) {
    const Icon = technologia.icon;
    
    return (
    <div 
      className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg min-w-[150px] h-[180px] transition-transform hover:scale-105"
      style={{ backgroundColor: technologia.color }}
    >
      <div className="w-20 h-20 mb-4 flex items-center justify-center text-white">
        <Icon size={60} color="white" />
      </div>
      <span className="text-white font-semibold text-center text-sm bg-white/10 px-2 py-1 rounded">
        {technologia.name}
      </span>
    </div>
    )
}