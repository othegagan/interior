import { InView } from './ui/in-view';
import SubTitle from './ui/sub-title';

const reasons = [
    {
        title: '01. initial consultation',
        description: 'We start with a one-on meeting to understand your vision preferences and requirement.',
        icon: '/others/icon-how-we-work-1.svg'
    },
    {
        title: '02. design planning',
        description: 'This involves selecting materials, and layouts, furnishings, as well as creating 3D renderings.',
        icon: '/others/icon-how-we-work-2.svg'
    },
    {
        title: '03. project execution',
        description: 'With the design plans in this place, we manage and coordinate all aspects of the projects.',
        icon: '/others/icon-how-we-work-3.svg'
    },
    {
        title: '04. final review',
        description: 'After completing project we conduct a thorough walkthrough with you to review the space.',
        icon: '/others/icon-how-we-work-4.svg'
    }
];

export default function HowWeWork() {
    return (
        <div id='how-we-work' className='overflow-hidden bg-secondary text-secondary-foreground'>
            <div className='container mx-auto px-6 py-16 lg:grid-cols-2'>
                <SubTitle text='How we work' variant='primary' style={{ animationDelay: '0.2s' }} />
                <div className='mt-6 grid w-full grid-cols-1 items-start gap-6 md:mt-8 md:grid-cols-2'>
                    <InView
                        variants={{
                            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}>
                        <h2 className='section-title'>
                            From concept to completion in <span className='text-primary'>our work</span>
                        </h2>
                    </InView>

                    <div className='flex items-start justify-end'>
                        <p className='max-w-[500px]'>
                            Our comprehensive approach guides you through each phase of the design process, from initial brainstorming and
                            conceptualization.
                        </p>
                    </div>
                </div>

                <div className='mt-6 grid gap-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4'>
                    {reasons.map((reason, i) => (
                        <div key={i} className='group flex flex-col'>
                            <div className='mb-5 flex size-16 items-center justify-center rounded-full group-hover:scale-110'>
                                <img src={reason.icon} alt='icon' width={64} height={64} />
                            </div>
                            <h3 className='mb-2 font-semibold text-xl'>{reason.title}</h3>
                            <p className='text-white/70'>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
