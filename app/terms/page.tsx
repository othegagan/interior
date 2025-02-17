import Navbar from '@/components/Navbar';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
    return (
        <div>
            <Navbar variant='dark' />

            <div className='prose-base prose container mx-auto mt-14 mb-10 prose-a:font-semibold prose-a:text-accent-300 prose-h3:text-black hover:prose-a:text-black lg:mb-20'>
                <div className=' mx-auto pt-14 pb-14'>
                    <h1 className='font-display font-extrabold text-5xl text-primary'>Terms and Conditions – ML Interiors</h1>
                </div>
                <p className='font-medium text-base'>(Based in Bengaluru, Karnataka) - Last Updated: 12th Feb 2025</p>
                <h2 className=' mt-5 mb-2 font-bold text-xl'>1. Purpose &amp; Importance of These Terms</h2>

                <p>
                    These Terms &amp; Conditions outline the scope of work, payment terms, and other essential details to ensure
                    transparency and professionalism in our interior design services. Having a clear agreement helps protect both parties
                    from misunderstandings and potential legal disputes.
                </p>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>2. Scope of Services</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>
                        We provide interior design solutions, including consultation, concept development, space planning, material
                        selection, and project execution.
                    </li>
                    <li>A detailed project plan, including timelines and pricing, will be shared before the work begins.</li>
                    <li>If any changes are requested after the project starts, they may affect costs and timelines.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>3. Payment Terms</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>A 60% advance payment is required before the project begins.</li>
                    <li>Payments must be made in stages as per the agreed-upon milestones.</li>
                    <li>The final payment must be made before the project is handed over.</li>
                    <li>All invoices will include GST as per Indian tax laws.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>4. Client Responsibilities</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>Clients must provide necessary approvals, property access, and timely feedback to ensure smooth execution.</li>
                    <li>
                        Any regulatory approvals (e.g., from local authorities or housing societies) must be obtained by the client before
                        the work starts.
                    </li>
                    <li>Delays caused by missing approvals or late client responses may impact the project timeline.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>5. Design Ownership &amp; Usage</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>We retain ownership of all designs, drawings, and plans until full payment is made.</li>
                    <li>Clients cannot copy, distribute, or use the design for other projects without written permission.</li>
                    <li>We may document and photograph the completed project for our portfolio unless the client requests otherwise.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>6. Quality &amp; Warranty</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>
                        We ensure high-quality execution, but any warranties on materials, furniture, or third-party work will be covered
                        under the manufacturer’s or vendor’s policies.
                    </li>
                    <li>Any defects in our work will be addressed within 6 months after project completion.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>7. Dispute Resolution &amp; Legal Protection</h2>
                <ol className='list-disc space-y-4 text-neutral-600 xl:ml-8'>
                    <li>In case of a dispute, both parties will first attempt to resolve the issue through discussion.</li>
                    <li>If unresolved, disputes will be handled through arbitration under the Arbitration and Conciliation Act, 1996.</li>
                    <li>The jurisdiction for any legal matters will be Bengaluru, Karnataka.</li>
                </ol>

                <h2 className=' mt-5 mb-2 font-bold text-xl'>8. Governing Law</h2>
                <p>These terms comply with Indian laws, including the Indian Contract Act, 1872, and the Consumer Protection Act, 2019.</p>
            </div>

            <footer className='bg-secondary text-white'>
                <div className='container mx-auto px-4 py-12'>
                    <div className=''>
                        {/* Contact Information */}
                        <div className='space-y-6'>
                            <h4 className='font-semibold'>For any inquiries, please reach out to:</h4>

                            <Link href='/' className='inline-flex'>
                                <img src='/logo-full-light.svg' alt='logo' width={200} height={120} className='size-auto' />
                            </Link>

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
        </div>
    );
}
