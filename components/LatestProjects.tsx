import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

const projects = [
    {
        name: 'Commercial Spaces ',
        imageUrl: '/others/project-1.jpg',
        desc: 'Urban Enterprise: Contemporary design for modern businesses',
        link: '/commercial-projects'
    },
    {
        name: 'Residential Spaces ',
        imageUrl: '/others/project-2.jpg',
        desc: 'Urban retreat: modern design meets comfort',
        link: '/residential-projects'
    }
];

export default function LatestProjects() {
    return (
        <div id='projects' className=' overflow-hidden'>
            <div className='container mx-auto px-6 py-16 lg:grid-cols-2'>
                <SubTitle text='Latest project' variant='primary' style={{ animationDelay: '0.2s' }} />
                <div className='mt-6 grid w-full grid-cols-1 items-start gap-6 md:mt-8 md:grid-cols-2'>
                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h2 className='section-title'>
                            Creative projects that define <span className='text-primary'>our style</span>
                        </h2>
                    </InView>

                    <div className='flex items-start justify-end'>
                        <p className='max-w-[500px]'>
                            Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and
                            stylish commercial interiors
                        </p>
                    </div>
                </div>

                <div className='mt-6 grid w-full grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-10'>
                    {projects.map((project) => (
                        <Link
                            href={project.link}
                            key={project.name}
                            className='group relative isolate flex h-[350px] flex-col justify-end overflow-hidden px-8 pt-40 pb-8'>
                            <Image
                                src={project.imageUrl}
                                alt={project.name}
                                title={project.name}
                                width={400}
                                height={400}
                                className='absolute inset-0 h-full w-full object-cover transition-all ease-linear group-hover:scale-105'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-black/30' />
                            <h3 className='z-10 mt-3 font-bold text-2xl text-white group-hover:underline group-hover:underline-offset-2'>
                                {project.name}
                            </h3>
                            <div className='z-10 mt-2 gap-y-1 overflow-hidden text-neutral-200 leading-6'>{project.desc}</div>
                        </Link>
                    ))}
                </div>

                <div className='mx-auto mt-6 flex w-full justify-center md:mt-10'>
                    <Link style={{ animationDelay: '0.7s' }} className='btn-primary group' href='/other-projects'>
                        See other projects
                        <ArrowRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
