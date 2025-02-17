import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowWeWork from '@/components/HowWeWork';
import LatestProjects from '@/components/LatestProjects';
import OurServices from '@/components/OurServices';
import Quote from '@/components/Quote';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';
const About = React.lazy(() => import('@/components/About'));

export default function Page() {
    return (
        <main className='overflow-x-hidden'>
            <Hero />
            <About />
            <WhyChooseUs />
            <OurServices />
            <HowWeWork />
            <LatestProjects />
            <Quote />
            <ContactUs />
            <Footer />
        </main>
    );
}
