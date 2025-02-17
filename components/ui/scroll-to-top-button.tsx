'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './button';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <Button onClick={scrollToTop} size='icon' className='fixed right-4 bottom-4 z-[1000] rounded-full'>
                    <ChevronUp />
                    <span className='sr-only'>Scroll to top</span>
                </Button>
            )}
        </div>
    );
}
