'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Page() {
    return (
        <div className=' mt-14 '>
            <Navbar variant='dark' />
            <div className='container mx-auto mb-10 pt-14 pb-4 lg:mb-20'>
                <h1 className='font-display font-extrabold text-4xl text-primary'>Other Projects</h1>
                <PhotoProvider maskOpacity={0.8} bannerVisible={true}>
                    <div className='gallery mt-4'>
                        {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
                            <PhotoView key={item} src={`/other-projects/cafe-${item}.jpg`}>
                                <img src={`/other-projects/cafe-${item}.jpg`} alt={`cafe-${item}.jpg`} className='gallery-item' />
                            </PhotoView>
                        ))}
                        {Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
                            <PhotoView key={item} src={`/other-projects/sallon-${item}.jpg`}>
                                <img src={`/other-projects/sallon-${item}.jpg`} alt={`sallon-${item}.jpg`} className='gallery-item' />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
            <Footer />
        </div>
    );
}
