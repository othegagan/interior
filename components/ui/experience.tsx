'use client';

import { useEffect, useRef, useState } from 'react';

export function Experience() {
    return (
        <div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[380px] md:size-[512px] '>
            <div className='flex size-36 flex-col items-center justify-center rounded-full border-[6px] bg-primary text-white'>
                <div className='font-bold text-[34px]'>
                    <NumberAnimation start={0} end={8} duration={1500} />+
                </div>

                <div className='text-center leading-tight'>
                    Years Of
                    <br />
                    Experience
                </div>
            </div>
        </div>
    );
}

export function NumberAnimation({ start = 0, end = 0, duration = 1000 }) {
    const [displayedNumber, setDisplayedNumber] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateNumber();
                }
            },
            {
                threshold: 0.5 // Adjust threshold as needed (e.g., 0.5 for 50% visibility)
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]);

    const animateNumber = () => {
        let currentNumber = start;
        const increment = Math.sign(end - start); // Determine increment direction
        const totalIncrements = Math.abs(end - start);
        const interval = Math.max(1, Math.floor(duration / totalIncrements)); // Calculate interval, min 1ms

        const timer = setInterval(() => {
            currentNumber += increment;
            setDisplayedNumber(currentNumber);

            if ((increment > 0 && currentNumber >= end) || (increment < 0 && currentNumber <= end)) {
                clearInterval(timer);
                setDisplayedNumber(end); // Ensure final value is correct
            }
        }, interval);
    };

    return <span ref={elementRef}>{displayedNumber}</span>;
}
