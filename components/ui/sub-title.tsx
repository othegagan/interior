import { cn } from '@/lib/utils';
import { LongArrow } from '@/public/icons';
import type { CSSProperties } from 'react';

interface SubTitleProps {
    text: string;
    variant: 'primary' | 'white';
    className?: string;
    style?: CSSProperties;
}

export default function SubTitle({ text, variant = 'primary', className, style }: SubTitleProps) {
    return (
        <div
            style={style}
            className={cn(
                'flex animate-fade-in-up items-center gap-2 text-md capitalize opacity-0',
                variant === 'primary' && 'text-primary',
                variant === 'white' && 'text-white',
                className
            )}>
            <LongArrow />
            {text}
        </div>
    );
}
