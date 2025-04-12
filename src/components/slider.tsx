'use client'
import { useEffect, useRef } from 'react';
import { Carousel } from 'flowbite';
import Image from 'next/image';

declare type truck = {
    name: string;
    text: string;
    image_url: string;
};

const Slider = ({ trucks }: { trucks: truck[] }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const prevButtonRef = useRef<HTMLButtonElement | null>(null);
    const nextButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        const items = trucks.map((_, index) => ({
            position: index,
            el: document.getElementById(`carousel-item-${index}`) as HTMLElement,
        }));

        const options = {
            defaultPosition: 0,
            interval: 10000,
            indicators: {
                activeClasses: 'bg-gray-700 dark:bg-gray-100',
                inactiveClasses: 'bg-gray-700 dark:bg-gray-100/50 hover:bg-gray-600 dark:hover:bg-gray-300',
                items: trucks.map((_, index) => ({
                    position: index,
                    el: document.getElementById(`carousel-indicator-${index}`) as HTMLElement,
                })),
            },
            onNext: () => console.log('Next slide'),
            onPrev: () => console.log('Previous slide'),
            onChange: () => console.log('Slide changed'),
        };

        const carousel = new Carousel(carouselRef.current, items, options);
        carousel.cycle();

        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (prevButton) prevButton.addEventListener('click', () => carousel.prev());
        if (nextButton) nextButton.addEventListener('click', () => carousel.next());

        return () => {
            if (prevButton) prevButton.removeEventListener('click', () => carousel.prev());
            if (nextButton) nextButton.removeEventListener('click', () => carousel.next());
        };
    }, [trucks]);

    return (
        <div id="carousel-example" ref={carouselRef} className="relative w-full lg:w-[50%]">
    <div className="relative overflow-clip rounded-lg min-h-[50vh]">
        {trucks.map((truck, index) => (
            <div
                key={index}
                id={`carousel-item-${index}`}
                className={`hidden duration-700 ease-in-out h-full`}
            >
                <div className="w-[100%] flex items-stretch justify-center h-full">
                    <li className="p-6 md:p-8 border border-[var(--primary-slider-border-color)] rounded-3xl h-full bg-[var(--foreground)] shadow-2xl shadow-gray-600/10 list-none w-[90%] md:w-[60%] text-sm md:text-base flex flex-col justify-between">
                        <div className="flex flex-col gap-4 items-start">
                            <h6 className="text-lg text-[var(--primary-slider-color)] text-start font-bold">
                                {truck.name}
                            </h6>
                            <p className="text-start text-[var(--secondary-slider-color)]">{truck.text}</p>
                            <Image
                            alt={truck.name}
                            src={truck.image_url}
                            width={1200}
                            height={600}
                            className="rounded-lg"
                        />
                        </div>

                    </li>
                </div>
            </div>
        ))}
    </div>
    <div className="absolute -bottom-10 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {trucks.map((_, index) => (
            <button
                key={index}
                id={`carousel-indicator-${index}`}
                className="h-3 w-3 rounded-full"
                aria-label={`Slide ${index + 1}`}
            ></button>
        ))}
    </div>
    <button
        ref={prevButtonRef}
        className="absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
            <svg
                fill='currentColor'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h4 w-4"
            >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
        </span>
    </button>
    <button
        ref={nextButtonRef}
        className="absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
            <svg
                fill='currentColor'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h4 w-4"
            >   
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
        </span>
    </button>
</div>
    );
};

export default Slider;