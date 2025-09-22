import Link from 'next/link';
import { Feather, Linkedin, Twitter, Instagram } from 'lucide-react';

const sitemap = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Feather className="h-8 w-8" />
              <span className="font-bold font-headline text-2xl">Aynthram</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Transforming Leaders, Empowering Artisans, Preserving Heritage.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">Sitemap</h3>
            <ul className="mt-4 space-y-2">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/70 hover:text-primary-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-primary-foreground/70">
              <li><a href="mailto:vasudev.aynthram@gmail.com" className="hover:text-primary-foreground">vasudev.aynthram@gmail.com</a></li>
              <li><a href="tel:+919703831819" className="hover:text-primary-foreground">+91 9703831819</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="text-primary-foreground/70 hover:text-primary-foreground" aria-label={social.name}>
                        <social.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Aynthram Leadership Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
