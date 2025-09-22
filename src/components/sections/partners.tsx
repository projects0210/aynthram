import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerIds = ['partner-1', 'partner-2', 'partner-3', 'partner-4', 'partner-5'];

export function Partners() {
    const partners = partnerIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

    return (
        <section id="partners" className="w-full py-20 lg:py-24 bg-background" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6.586l-2.828 2.828-1.414-1.414 2.828-2.828c.78-.78 2.048-.78 2.828 0l1.414 1.414-2.828 2.828-1.414-1.414zM40 32c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM8 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='hsl(165, 45%, 19%)' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
