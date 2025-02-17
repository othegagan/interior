import { PaintBucket, Sofa, SquareChartGantt } from 'lucide-react';
import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

const features = [
    {
        title: 'tailored design solutions',
        description: 'We provide personalized interior design services that reflect your unique vision and lifestyle.',
        icon: <PaintBucket className='size-6 group-hover:scale-110' />
    },
    {
        title: 'Seamless Project Management',
        description: 'We handle the entire design process, from concept to completion, with flawless execution.',
        icon: <SquareChartGantt className='size-6 group-hover:scale-110' />
    },
    {
        title: 'Client-Centered Collaboration',
        description: 'Your input is valued throughout the entire process, ensuring your vision is fully realized.',
        icon: <Sofa className='size-6 group-hover:scale-110' />
    }
];

export default function WhyChooseUs() {
    return (
        <div id='why-choose-us' className=' overflow-hidden bg-secondary text-secondary-foreground'>
            <div className='container mx-auto grid items-center gap-8 px-6 py-16 lg:grid-cols-2'>
                <div className='space-y-8'>
                    <SubTitle text='Why Choose Us' variant='white' style={{ animationDelay: '0.2s' }} />

                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h1 className='section-title'>
                            A behind the scenes look at <span className='text-primary'>our agency</span>
                        </h1>
                    </InView>

                    <p className='text-muted-foreground'>
                        From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert
                        craftsmanship.
                    </p>

                    <div className='space-y-6 md:space-y-8'>
                        {features.map((feature, idx) => (
                            <div className='group flex flex-row items-start gap-6 rounded-lg' key={idx}>
                                <div className='mb-8 flex shrink-0 items-center justify-center rounded-full bg-white/10 p-3'>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className='font-medium capitalize md:mb-2 md:text-xl'>{feature.title}</h3>
                                    <p className='text-sm text-white/60 md:text-base'>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex h-fit flex-col gap-6'>
                    <div className='grid grid-cols-5 gap-6 '>
                        <div className='col-span-3'>
                            <img
                                src='/others/why-choose-img-1.jpg'
                                alt='why-choose-1'
                                className=' h-full w-full object-cover object-center'
                            />
                        </div>
                        <div className='col-span-2'>
                            <img
                                src='/others/why-choose-img-2.jpg'
                                alt='why-choose-2'
                                className=' h-full w-full object-cover object-center'
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-6 '>
                        <div className='col-span-2'>
                            <img
                                src='/others/why-choose-img-4.jpg'
                                alt='why-choose-3'
                                className=' h-full w-full object-cover object-center'
                            />
                        </div>
                        <div className='col-span-3'>
                            <img
                                src='/others/why-choose-img-3.jpg'
                                alt='why-choose-4'
                                className=' h-full w-full object-cover object-center'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
