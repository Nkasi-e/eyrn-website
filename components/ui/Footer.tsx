'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-2">EYRN</h3>
            <p className="text-sm text-gray-400">
              Empowering people through clean gospel experiences.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-300">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 text-sm text-gray-500 text-center border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} EYRN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
