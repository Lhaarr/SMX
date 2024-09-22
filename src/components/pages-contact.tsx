'use client';

import { Header } from "@/components/components-header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus(`Failed to send email: ${data.message}`);
      } else {
        const data = await res.json();
        setStatus(data.message);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${(error as Error).message}`);
    }
  };

  return (
    <div className={`min-h-screen bg-white flex flex-col ${outfit.className}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Ta kontakt, i dag!</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Navn
            </label>
            <Input id="name" type="text" placeholder="Ditt navn" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-post
            </label>
            <Input id="email" type="email" placeholder="din@epost.no" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Melding
            </label>
            <Textarea id="message" placeholder="Skriv din melding her..." required value={formData.message} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
            Send melding
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </main>
      <footer className="bg-red-50 border-t border-red-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 Semex Norge. Alle rettigheter reservert.
        </div>
      </footer>
    </div>
  );
}