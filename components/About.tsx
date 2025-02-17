import { ArrowRight, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { GoCheckCircleFill } from 'react-icons/go';
import { Button } from './ui/button';
import { Experience, NumberAnimation } from './ui/experience';
import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

export default function About() {
    return (
        <div id='about-us' className=' overflow-hidden bg-[url(/others/section-bg-shape-1.svg)] bg-center bg-contain bg-no-repeat'>
            <div className='container mx-auto grid items-start gap-8 px-6 py-16 lg:grid-cols-2'>
                {/* Left Column - Images */}

                <div className='relative bg-[url(/others/about-us-bg-shape.svg)] bg-auto bg-no-repeat pr-[100px] pb-[180px] md:mr-[30px] md:bg-[left_60_px_bottom_40px]'>
                    <div style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }} className='w-[240px] md:w-full'>
                        <img
                            src='others/about-img-1.jpg'
                            className='aspect-[1/0.7] w-full object-cover'
                            alt='about-img-1'
                            title='about-img-1'
                            style={{ transform: 'translate(0px, 0px)' }}
                        />
                    </div>
                    <div className='absolute right-0 bottom-0 w-[240px] md:w-full md:max-w-[385px]'>
                        <div style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
                            <img
                                src='others/about-img-2.jpg'
                                className='aspect-auto w-full object-cover'
                                alt='about-img-2'
                                title='about-img-2'
                                style={{ transform: 'translate(0px, 0px)' }}
                            />
                        </div>
                        <Experience />
                    </div>
                    <div className='-rotate-90 -translate-y-5 -right-5 md:-right-10 absolute top-24 flex w-fit translate-x-5 items-center justify-center gap-2'>
                        <p className=' size-[44px] flex-center rounded-full bg-primary font-medium text-white hover:bg-black md:size-[60px]'>
                            <NumberAnimation start={0} end={95} duration={1500} />%
                        </p>
                        <h3 className='font-medium text-lg capitalize'>positive feedback</h3>
                    </div>
                    <div className='absolute bottom-7 text-neutral-200 md:bottom-12 md:left-12 md:scale-[1.2]'>
                        <div className='grid rotate-45 grid-cols-6 gap-2'>
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className='h-2 w-2 rounded-full bg-current' />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className='space-y-8'>
                    <SubTitle text='About Us' variant='primary' style={{ animationDelay: '0.2s' }} />

                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h2 className='section-title'>
                            Our passion for design, <span className='text-primary'>your vision realized</span>
                        </h2>
                    </InView>

                    <p className='leading-relaxed'>
                        Our dedicated team of designers works closely with you to understand your vision and bring it to life with
                        thoughtful attention to detail. Whether it's transforming a single room, an entire home, or a commercial space, we
                        ensure every project is executed with precision. From renovations and repairs to complete makeovers, we deliver
                        exceptional results tailored to your needs.
                    </p>

                    <div className='flex max-w-lg flex-col gap-4 md:flex-row md:justify-between'>
                        <div>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-2'>
                                    <GoCheckCircleFill className='size-5 text-primary ' />
                                    <span>Creative expertise</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <GoCheckCircleFill className='size-5 text-primary ' />
                                    <span>Client-centered approach</span>
                                </div>
                            </div>

                            <Button effect='gooeyLeft' className='group mt-6 hidden w-fit md:mt-10 md:flex'>
                                Read more <ArrowRight className='transition-all ease-in group-hover:translate-x-3' />
                            </Button>
                        </div>

                        <div className='hidden border md:block' />

                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-4'>
                                <div className='flex-center rounded-full bg-primary p-2 text-white'>
                                    <Phone />
                                </div>
                                <div>
                                    <div className='text-muted-foreground text-sm'>Need Any Help?</div>
                                    <Link href='tel:+919036949408' className='font-semibold text-lg hover:underline'>
                                        +91 9036949408
                                    </Link>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='flex-center rounded-full bg-primary p-2 text-white'>
                                    <User />
                                </div>
                                <div>
                                    <div className='font-semibold'>Leslie Alexander</div>
                                    <div className='text-muted-foreground text-sm'>Co Founder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
