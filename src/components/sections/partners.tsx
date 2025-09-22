import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = ['partner-1', 'partner-2', 'partner-3', 'partner-4', 'partner-5', 'partner-6'];

export function Partners() {
    const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

    return (
        <section id="partners" className="w-full py-20 lg:py-24 bg-primary/5">
            <div className="container">
                <h2 className="text-center text-xl font-semibold text-foreground/70 tracking-wide">
                    Trusted By Industry Leaders & Forward-Thinking Organizations
                </h2>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
                    {partners.map(partner => partner && (
                        <div key={partner.id} className="flex justify-center">
                            <Image
                                src={partner.imageUrl}
                                alt={partner.description}
                                data-ai-hint={partner.imageHint}
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
