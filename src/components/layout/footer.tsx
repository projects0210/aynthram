import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { AynthramLogo } from '@/components/logo';

const programs = [
  { name: 'Corporate Leadership', href: '#programs' },
  { name: 'Startup Founders', href: '#programs' },
  { name: 'Mid-Level Managers', href: '#programs' },
  { name: 'Educators & Innovators', href: '#programs' },
];

const company = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Approach', href: '#experience' },
  { name: 'Heritage & Culture', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
               <AynthramLogo className="h-8 w-auto text-white" />
            </Link>
            <p className="mt-4 text-base text-primary-foreground/70 text-balance">
              Transforming leadership through immersive experiences that blend ancient wisdom with modern practices.
            </p>
             <div className="flex mt-6 space-x-4">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="text-primary-foreground/70 hover:text-primary-foreground" aria-label={social.name}>
                        <social.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold tracking-wider uppercase">Programs</h3>
            <ul className="mt-4 space-y-3">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-3 text-primary-foreground/70">
              <li><a href="mailto:vasudev.aynthram@gmail.com" className="hover:text-primary-foreground transition-colors">vasudev.aynthram@gmail.com</a></li>
              <li><a href="tel:+919703831819" className="hover:text-primary-foreground transition-colors">+91 9703831819</a></li>
              <li className="pt-2">Odisha, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Aynthram Leadership Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
