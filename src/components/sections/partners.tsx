import Image from 'next/image';
import partner1 from '@/public/images/partner-1.png';
import partner2 from '@/public/images/partner-2.png';
import partner3 from '@/public/images/partner-3.png';
import partner4 from '@/public/images/partner-4.png';
import partner5 from '@/public/images/partner-5.png';
import partner6 from '@/public/images/partner-6.png';


const partners = [
    { id: 'partner-1', name: 'Partner 1', logo: partner1 },
    { id: 'partner-2', name: 'Partner 2', logo: partner2 },
    { id: 'partner-3', name: 'Partner 3', logo: partner3 },
    { id: 'partner-4', name: 'Partner 4', logo: partner4 },
    { id: 'partner-5', name: 'Partner 5', logo: partner5 },
    { id: 'partner-6', name: 'Partner 6', logo: partner6 },
];

export function Partners() {
    return (
        <section id="partners" className="w-full py-20 lg:py-24 bg-primary/5">
            <div className="container">
                <h2 className="text-center text-xl font-semibold text-foreground/70 tracking-wide">
                    Trusted By Industry Leaders & Forward-Thinking Organizations
                </h2>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
                    {partners.map(partner => (
                        <div key={partner.id} className="flex justify-center">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                data-ai-hint="company logo"
                                width={158}
                                height={48}
                                className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
