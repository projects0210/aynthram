import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = ['partner-1', 'partner-2', 'partner-3', 'partner-4', 'partner-5'];

export function Partners() {
    const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

    return (
        <section id="partners" className="w-full py-20 lg:py-24 bg-primary-foreground/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243E55' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}>
            <div className="container">
                <h2 className="text-center text-lg font-semibold text-foreground/60 tracking-wider">
                    Trusted By Industry Leaders & Partners
                </h2>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
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
