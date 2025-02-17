import Image from 'next/image';
import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

const services = [
    {
        name: 'Commercial interior design',
        imageUrl: '/others/service-2.jpg',
        desc: 'Enhancing business environments with professional, functional, and aesthetically.'
    },
    {
        name: 'Residential interior design',
        imageUrl: '/others/service-1.jpg',
        desc: 'We create personalized living spaces that reflect your style and functional needs.'
    }
];

export default function OurServices() {
    return (
        <div id='our-services' className=' overflow-hidden'>
            <div className='container mx-auto px-6 py-16 lg:grid-cols-2'>
                <SubTitle text='Our services' variant='primary' style={{ animationDelay: '0.2s' }} />
                <div className='mt-6 grid w-full grid-cols-1 items-start gap-6 md:mt-8 md:grid-cols-2'>
                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h1 className='section-title'>
                            Innovative design services for <span className='text-primary'>every need</span>
                        </h1>
                    </InView>

                    <div className='flex items-start justify-end'>
                        <p className='max-w-[500px]'>
                            We offer a range of bespoke interior design services tailored to your unique needs. From concept development to
                            final installation.
                        </p>
                    </div>
                </div>

                <div className='mt-6 grid w-full grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-10'>
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className='group relative isolate flex h-[350px] flex-col justify-end overflow-hidden px-8 pt-40 pb-8'>
                            <Image
                                src={service.imageUrl}
                                alt={service.name}
                                width={400}
                                height={400}
                                className='absolute inset-0 h-full w-full object-cover transition-all ease-linear group-hover:scale-105'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-black/30' />
                            <h3 className='z-10 mt-3 font-bold text-2xl text-white'>{service.name}</h3>
                            <div className='z-10 mt-2 gap-y-1 overflow-hidden text-neutral-200 leading-6'>{service.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
