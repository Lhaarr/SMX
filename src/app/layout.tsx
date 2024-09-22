import * as React from "react";
import '../styles/globals.css'; // Ensure this file contains the correct path to global styles
import { ChevronDown, Facebook, Twitter, Instagram } from "lucide-react"
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head>
        {/* Meta tags, links, etc. can go here */}
      </head>
      <body>
        {/* Header */}
        <header className="bg-white border-b border-red-100 shadow-sm fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/semexlogo.svg"
                alt="Semex Norge Logo"
                width={60}
                height={60}
                className="rounded"
              />
              <h1 className="text-3xl font-bold text-red-600 ml-4">Semex Norge</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">Hjem</a>
              <a href="/pages/catalog" className="text-gray-600 hover:text-red-600 transition-colors">Våre Okser</a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Om Oss</a>
              <a href="/pages/contact" className="text-gray-600 hover:text-red-600 transition-colors">Kontakt</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="mt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-red-50 border-t border-red-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-red-600 text-xl mb-4">Om oss</h4>
                <p className="text-gray-600">
                  Semex Norge er forpliktet til å levere genetiske løsninger av høy kvalitet samtidig som vi sikrer velferden til våre dyr og miljøet.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-red-600 text-xl mb-4">Hurtig Linker</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                      Hjem
                    </a>
                  </li>
                  <li>
                    <a href="/pages/catalog" className="text-gray-600 hover:text-red-600 transition-colors">
                      Okser
                    </a>
                  </li>
                  <li>
                    <a href="/pages/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                      Kontakt oss
                    </a>
                  </li>
                </ul>
                <div className="mt-6">
                  <h5 className="font-semibold text-red-700 mb-3">Følg oss</h5>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/SemexNorge?locale=nb_NO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/semex_norge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-red-600 text-xl mb-4">Kontakt oss</h4>
                <p className="text-gray-600 mb-2">4362 Vigrestad</p>
                <p className="text-gray-600 mb-2">Telefon: (123) 456-7890</p>
                <p className="text-gray-600">E-post: @gmail.com</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-red-200 text-center text-gray-600">
              © 2024 Semex Norge. Alle rettigheter reservert.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}