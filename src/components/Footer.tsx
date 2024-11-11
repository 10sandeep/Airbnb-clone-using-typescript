import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Safety Information', href: '#' },
      { label: 'Cancellation Options', href: '#' },
      { label: 'COVID-19 Response', href: '#' },
    ],
    community: [
      { label: 'Community Forum', href: '#' },
      { label: 'Become a Host', href: '#' },
      { label: 'Refer a Friend', href: '#' },
      { label: 'Gift Cards', href: '#' },
    ],
    hosting: [
      { label: 'Try Hosting', href: '#' },
      { label: 'Host Resources', href: '#' },
      { label: 'Community Center', href: '#' },
      { label: 'Responsible Hosting', href: '#' },
    ],
    about: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Policies', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold capitalize mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube size={20} />
              </a>
            </div>

            <div className="mt-4 md:mt-0 text-gray-600">
              <span>© 2024 Airbnb Clone. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}