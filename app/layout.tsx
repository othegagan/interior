import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Geist_Mono, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

const hankenGrotesk = Hanken_Grotesk({
    variable: '--font-hanken'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://mlinteriors.vercel.app'),
    title: {
        default: 'ML Interiors | Luxury Interior Design Services in Bengaluru',
        template: '%s | ML Interiors'
    },
    description:
        'Premium interior design services in Bengaluru. Specializing in residential, commercial, and modular kitchen designs with a focus on luxury, sustainability, and modern aesthetics.',
    applicationName: 'ML Interiors',
    authors: [{ name: 'ML Interiors', url: 'https://mlinteriors.vercel.app' }],
    generator: 'Next.js',
    keywords: [
        // Location-specific keywords
        'interior designers in Bengaluru',
        'best interior design company in Bangalore',
        'luxury interior designers Karnataka',
        'Vidyaranyapura interior design services',

        // Service-specific keywords
        'luxury residential interior design',
        'commercial office interior solutions',
        'modular kitchen designers',
        'premium home interior services',
        'sustainable interior design company',
        'modern office interior design',
        'custom furniture design services',

        // Feature-specific keywords
        '3D interior visualization',
        'space planning experts',
        'turnkey interior solutions',
        'eco-friendly interior designs',
        'smart home interior integration',
        'budget-friendly interior packages',

        // Room-specific keywords
        'luxury bedroom interior design',
        'modern living room designs',
        'contemporary kitchen interiors',
        'office workspace design',
        'bathroom renovation services',

        // Style-specific keywords
        'contemporary interior design',
        'minimalist home interiors',
        'traditional Indian interior design',
        'modern luxury interiors',
        'industrial style office design'
    ],
    referrer: 'origin-when-cross-origin',
    creator: 'ML Interiors Team',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: 'https://mlinteriors.vercel.app'
    },
    openGraph: {
        title: 'ML Interiors - Luxury Interior Design Services in Bengaluru',
        description:
            'Transform your space with ML Interiors. Specialized in luxury residential, commercial, and modular kitchen designs. Get expert interior design services in Bengaluru.',
        url: 'https://mlinteriors.vercel.app',
        siteName: 'ML Interiors',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://mlinteriors.vercel.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'ML Interiors - Luxury Interior Design Services'
            },
            {
                url: 'https://mlinteriors.vercel.app/og-image-square.png',
                width: 600,
                height: 600,
                alt: 'ML Interiors Logo and Showcase'
            }
        ]
    },
    // twitter: {
    //     card: 'summary_large_image',
    //     site: '@mlinteriors',
    //     creator: '@mlinteriors',
    //     title: 'ML Interiors - Luxury Interior Design Services',
    //     description: 'Transform your space with ML Interiors. Expert interior design services in Bengaluru.',
    //     images: {
    //         url: 'https://mlinteriors.vercel.app/twitter-image.png',
    //         alt: 'ML Interiors - Luxury Interior Design Portfolio'
    //     }
    // },
    category: 'Interior Design',
    classification: 'Interior Design Services',
    other: {
        'msapplication-TileColor': '#1C2528',
        'theme-color': '#1C2528',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'format-detection': 'telephone=no'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
            <head>
                <script
                    type='application/ld+json'
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            name: 'ML Interiors',
                            image: 'https://mlinteriors.vercel.app/og-image.png',
                            '@id': 'https://mlinteriors.vercel.app',
                            url: 'https://mlinteriors.vercel.app',
                            telephone: '+919036949408',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'No.22, 3rd cross Kaveri Layout, Doddabettahalli Layout',
                                addressLocality: 'Vidyaranyapura',
                                addressRegion: 'Bengaluru',
                                postalCode: '560097',
                                addressCountry: 'IN'
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: 13.0827, // Replace with actual coordinates
                                longitude: 77.5574 // Replace with actual coordinates
                            },
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                                opens: '09:00',
                                closes: '18:00'
                            },
                            // sameAs: [
                            //     'https://facebook.com/mlinteriors',
                            //     'https://twitter.com/mlinteriors',
                            //     'https://instagram.com/mlinteriors'
                            // ],
                            priceRange: '₹₹₹',
                            servesCuisine: 'Interior Design Services',
                            areaServed: ['Bengaluru', 'Karnataka'],
                            description:
                                'Premium interior design services in Bengaluru. Specializing in residential, commercial, and modular kitchen designs with a focus on luxury, sustainability, and modern aesthetics.'
                        })
                    }}
                />
            </head>
            <body
                className={cn(
                    ' h-dvh w-full min-w-[360px] overflow-x-hidden bg-background font-sans antialiased',

                    geistMono.variable,
                    hankenGrotesk.variable
                )}>
                {children}
                <ScrollToTopButton />
            </body>
        </html>
    );
}
