import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const infoLinks = [
    { title: 'About Our Company', href: '/#about-us' },
    { title: 'View Our Services', href: '/#our-services' },
    { title: 'Projects', href: '/#projects' },
    { title: 'Terms & Conditions', href: '/terms' }
];

export default function Footer() {
    return (
        <footer className='bg-secondary text-white'>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    {/* Logo and Social Links */}
                    <div className='space-y-6'>
                        <Link href='/' className='inline-flex'>
                            <img src='/logo-full-light.svg' alt='logo' width={200} height={120} className='size-auto' title='logo' />
                        </Link>
                        <div className='flex gap-4'>
                            <Link
                                href='https://wa.me/message/QJXJ3T5MJPDTA1'
                                rel='noopener noreferrer'
                                className='rounded-full bg-white p-2 transition-opacity hover:opacity-80'>
                                <FaWhatsapp className='h-5 w-5 text-[#1C2528]' />
                                <span className='sr-only'>Whatsapp</span>
                            </Link>
                            <Link
                                href='https://www.instagram.com/m.l_interiors'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-full bg-white p-2 transition-opacity hover:opacity-80'>
                                <FaInstagram className='h-5 w-5 text-[#1C2528]' />
                                <span className='sr-only'>Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Information Links */}
                    <div className='space-y-6'>
                        <h3 className='font-semibold text-xl'>Information</h3>
                        <nav className='flex flex-col gap-4'>
                            {infoLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    rel='noopener noreferrer'
                                    className='w-fit transition-colors hover:text-gray-300'>
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-6'>
                        <h3 className='font-semibold text-xl'>Contact Us</h3>
                        <div className='space-y-5'>
                            <div className='flex items-center gap-3'>
                                <Phone className='h-5 w-5 flex-shrink-0' />
                                <Link href='tel:+919036949408' className='transition-colors hover:text-gray-300'>
                                    +91 9036949408
                                </Link>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className='h-5 w-5 flex-shrink-0' />
                                <Link href='mailto:contact.mlinteriors@gmail.com' className='transition-colors hover:text-gray-300'>
                                    contact.mlinteriors@gmail.com
                                </Link>
                            </div>
                            <div className='flex items-start gap-3'>
                                <MapPin className='mt-1 h-5 w-5 flex-shrink-0' />
                                <Link
                                    href='https://www.google.com/maps/search/Doddabettahalli+Layout,+Vidyaranyapura+Bengaluru+-+560097/@13.0922701,77.5590017,19.25z?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='transition-colors hover:text-gray-300'>
                                    <address className='not-italic'>
                                        No.22, 3rd cross, Kaveri Layout, Doddabettahalli Layout, Vidyaranyapura Bengaluru - 560097
                                    </address>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-gray-700 border-t'>
                <div className='container mx-auto px-4 py-6 text-center text-sm'>
                    © {new Date().getFullYear()} ML Interiors. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
