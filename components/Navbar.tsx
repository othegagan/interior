'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

type NavLink = {
    title: string;
    href: string;
};

const navLinks: NavLink[] = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/#about-us' },
    { title: 'Services', href: '/#our-services' },
    { title: 'Projects', href: '/#projects' },
    { title: 'Why Choose Us', href: '/#why-choose-us' }
];

interface NavbarProps {
    variant: 'light' | 'dark';
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <header className='absolute top-0 z-50 w-full'>
            <div className='container mx-auto px-4'>
                {/* Desktop Navigiation */}
                <div className='hidden h-20 items-center justify-between border-muted-foreground/50 border-b md:flex'>
                    <Link href='/' className='flex items-center gap-2'>
                        <Image
                            src={variant === 'light' ? '/logo-full-light.svg' : '/logo-full-dark.svg'}
                            alt='logo'
                            width={200}
                            height={120}
                            className='size-auto'
                            priority
                        />
                    </Link>
                    <nav className=' items-center gap-10 md:flex'>
                        {navLinks.map((link) => (
                            <Link
                                className={cn(
                                    'font-medium transition-all hover:scale-105 hover:text-primary',
                                    variant === 'light' ? 'text-white' : 'text-black'
                                )}
                                key={link.title}
                                href={link.href}>
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <Link className='btn-primary group' href='/#contact'>
                        Get In Touch
                        <ArrowRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className='flex h-20 w-full items-center justify-between border-muted-foreground/50 border-b p-4 md:hidden'>
                    <Link href='/'>
                        <Image
                            src={variant === 'light' ? '/logo-full-light.svg' : '/logo-full-dark.svg'}
                            alt='logo'
                            width={200}
                            height={120}
                            className='size-auto'
                            priority
                        />
                    </Link>

                    <button type='button' onClick={() => setIsOpen(!isOpen)} className='z-50 flex flex-col gap-1.5 p-2'>
                        <span
                            className={cn(
                                'block h-0.5 w-6 transition-all duration-300',
                                isOpen ? 'translate-y-2 rotate-45' : '',
                                variant === 'light' ? 'bg-white' : 'bg-black'
                            )}
                        />
                        <span
                            className={cn(
                                'block h-0.5 w-6 transition-all duration-300',
                                isOpen ? 'opacity-0' : '',
                                variant === 'light' ? 'bg-white' : 'bg-black'
                            )}
                        />
                        <span
                            className={cn(
                                'block h-0.5 w-6 transition-all duration-300',
                                isOpen ? '-rotate-45 -translate-y-2' : '',
                                variant === 'light' ? 'bg-white' : 'bg-black'
                            )}
                        />
                    </button>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={`fixed inset-0 transform bg-primary/50 backdrop-blur-[8px] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className='flex h-full flex-col items-center justify-center gap-8'>
                            <Image
                                src={variant === 'light' ? '/logo-full-light.svg' : '/logo-full-dark.svg'}
                                alt='logo'
                                width={200}
                                height={120}
                                className='size-auto'
                                priority
                            />
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'font-semibold text-2xl tracking-wide transition-all hover:scale-105',
                                        variant === 'light' ? 'text-white' : 'text-black'
                                    )}>
                                    {link.title}
                                </Link>
                            ))}

                            <Button
                                className='btn-primary group'
                                onClick={() => {
                                    router.push('/#contact');
                                    setIsOpen(false);
                                }}>
                                Get In Touch
                                <ArrowRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
