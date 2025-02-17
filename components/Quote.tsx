import Image from 'next/image';
import { InView } from './ui/in-view';

const quote = 'The essence of interior design will always be about people and how they live.';

export default function Quote() {
    return (
        <section className='relative py-32'>
            <div className='container z-10 text-white'>
                <div className='flex flex-col items-center text-center'>
                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <div className='max-w-4xl px-8 font-black text-xl leading-relaxed md:text-4xl'>&ldquo;{quote}&rdquo;</div>
                    </InView>
                </div>
            </div>

            <Image
                src='/others/dark-moody.webp'
                alt='image'
                fill
                className='-z-10 absolute object-cover object-center brightness-50'
                priority
            />
        </section>
    );
}
