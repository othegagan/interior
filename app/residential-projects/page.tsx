'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Page() {
    return (
        <div className=' mt-14 '>
            <Navbar variant='dark' />
            <div className='container mx-auto mb-10 pt-14 pb-14 lg:mb-20'>
                <h1 className='font-display font-extrabold text-4xl text-primary'>Residential Projects</h1>
                <PhotoProvider maskOpacity={0.8} bannerVisible={true}>
                    <div className='gallery mt-4'>
                        {Array.from({ length: 11 }, (_, index) => index + 1).map((item) => (
                            <PhotoView key={item} src={`/residential/res-${item}.jpg`}>
                                <img src={`/residential/res-${item}.jpg`} alt='' className='gallery-item' />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
            <Footer />
        </div>
    );
}
