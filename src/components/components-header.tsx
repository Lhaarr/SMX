'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [view, setView] = useState<'laptop' | 'mobile'>('laptop');

  return (
    <header className="bg-white border-b border-red-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <Image
          src="/images/semexlogo.svg"
          alt="Semex Norge Logo"
          width={60}
          height={60}
          className="rounded"
          priority
        />
        <h1 className="text-3xl font-bold text-red-600 ml-4">Semex Norge</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">Hjem</Link>
          <Link href="/pages/catalog" className="text-gray-600 hover:text-red-600 transition-colors">Våre Okser</Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">Om Oss</Link>
          <Link href="/pages/contact" className="text-gray-600 hover:text-red-600 transition-colors">Kontakt</Link>
        </nav>
      </div>

      {/* Apply view-specific class */}
      <div className={view === 'laptop' ? 'laptop-view' : 'mobile-view'}>
        {/* Page content goes here */}
      </div>
    </header>
  );
}