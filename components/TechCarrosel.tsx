'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { tecnologias } from '@/lib/tecnologias';
import Autoplay from 'embla-carousel-autoplay';
import { TechCard } from './TechCard';

export function TechCarrosel(){
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1, 
            dragFree: true,
            containScroll: 'trimSnaps',
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const duplicaTech = [...tecnologias, ...tecnologias, ...tecnologias, ...tecnologias, ...tecnologias];

    return (
        <div className='my-16'>
            <div className='text-center'>
            <h2 className='text-2xl'>Ferramentas & Tecnologias</h2>
            </div>
        <div className='overflow-hidden max-w-5xl mx-auto' ref={emblaRef}>
            <div className='flex gap-6 py-10 ' >
                {duplicaTech.map((tech, index) => (
                    <div key={index} className='flex-[0_0_auto]'>
                        <TechCard technologia={tech} />
                    </div>
                ))}
            </div>
        </div>
                </div>
    )
}