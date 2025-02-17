import SubTitle from '@/components/ui/sub-title';
import { TextEffect } from '@/components/ui/text-effect';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Hero() {
    return (
        <section className=' relative min-h-[100dvh]'>
            <Navbar variant='light' />
            <Image src='/hero-bg.jpg' alt='Interior workspace with desk and chair' fill className='object-cover brightness-90' priority />
            <div className='container relative mx-auto px-6 pt-32'>
                <div className='flex w-fit max-w-5xl flex-col justify-start gap-10'>
                    <SubTitle text='Inspired interiors' variant='white' style={{ animationDelay: '0.2s' }} />

                    <TextEffect
                        per='word'
                        as='h1'
                        preset='blur'
                        className=' font-bold text-4xl text-white leading-[1.15] tracking-tight md:text-[80px]'>
                        Designing your dream spaces, one room at a time
                    </TextEffect>

                    <div className=' max-w-2xl animate-fade-in-up text-white text-xl opacity-0' style={{ animationDelay: '0.5s' }}>
                        We specialize in creating personalized, functional, and stylish interiors that reflect your unique vision.
                    </div>

                    <Link style={{ animationDelay: '0.7s' }} className='btn-primary group' href='/#projects'>
                        View Projects
                        <ArrowRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
                    </Link>
                </div>
            </div>
        </section>
    );
}
