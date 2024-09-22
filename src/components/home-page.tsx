'use client'
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Facebook, Twitter, Instagram } from "lucide-react"
import { Outfit } from 'next/font/google';
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const outfit = Outfit({ subsets: ['latin'] });

const popularBull = {
  id: "005",
  navn: "Apollo",
  image: "/images/bulls/Apollo.jpg",
  rase: "Brown Swiss",
  milkYield: 14500,
  proteinProsent: 3.5,
  fetProsent: 4.2,
  fertility: 95
}

// Mock data for Facebook posts
const facebookPosts = [
  {
    id: 1,
    content: "Spennende nyhet! Vår nye okse Thunder har blitt med i Semex Norge-familien. Sjekk ut hans imponerende statistikk!",
    date: "2024-03-15T10:30:00Z"
  },
  {
    id: 2,
    content: "Bli med på vårt kommende webinar om å maksimere melkeproduksjonen med Semex-genetikk. Registrer deg nå!",
    date: "2024-03-14T14:45:00Z"
  },
  {
    id: 3,
    content: "Gratulerer til Bonde Johansen for å ha oppnådd rekordhøy melkeavkastning med vår Blitz-genetikk!",
    date: "2024-03-13T09:15:00Z"
  }
]
const HomePageComponent = () => {
  return (
    <div className={outfit.className}>
      {/* Header Section */}
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
      </header>

      {/* Main Content */}
      <div className="mt-16">
        <main className="flex-grow bg-white">
          {/* Hero Section */}
            <section
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/hero-bull.jpg')",
              backgroundPosition: "center center",
              backgroundPositionY: "10%",
            }}
            >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container mx-auto px-4 relative z-0 text-center">
              <h2 className="text-5xl font-bold text-white mb-4">Velkommen til Semex Norge</h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Vi tilbyr de beste genetiske løsningene for storfe i Norge. Opplev fremskritt og kvalitet i hver generasjon!
              </p>
              <Link href="/pages/catalog">
              <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-3">
                Utforsk våre Okser
              </Button>
              </Link>
            </div>
            </section>

            <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-semibold text-gray-800 mb-6">Hvorfor Velge Oss?</h3>
              <p className="text-lg text-gray-600 mb-12">
              Semex Norge er dedikert til å levere genetiske løsninger av høyeste kvalitet. Vi fokuserer på bærekraft, dyrevelferd og avansert teknologi for å sikre at våre kunder får de beste resultatene.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-red-600 mb-4">Bærekraft</h4>
                <p className="text-gray-600">
                Vi er forpliktet til bærekraftig praksis som beskytter miljøet og sikrer fremtiden for kommende generasjoner.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-red-600 mb-4">Dyrevelferd</h4>
                <p className="text-gray-600">
                Våre genetiske løsninger er utviklet med fokus på dyrevelferd, for å sikre sunne og produktive dyr.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-red-600 mb-4">Avansert Teknologi</h4>
                <p className="text-gray-600">
                Vi bruker den nyeste teknologien for å levere presise og effektive genetiske løsninger som gir resultater.
                </p>
              </div>
              </div>
            </div>
            </section>
        </main>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Most Popular Bull Section */}
            <section className="flex justify-center">
              <div className="w-full max-w-md">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">Vår mest populære okse</h3>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={popularBull.image}
                      alt={popularBull.navn}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-3xl mb-3">{popularBull.navn}</CardTitle>
                    <Badge className="mb-4 bg-red-600 text-white px-3 py-1 text-sm">{popularBull.rase}</Badge>
                    <div className="space-y-3">
                      <p className="text-lg"><span className="font-semibold">Melkeytelse:</span> {popularBull.milkYield} kg</p>
                      <p className="text-lg"><span className="font-semibold">Protein:</span> {popularBull.proteinProsent}%</p>
                      <p className="text-lg"><span className="font-semibold">Fett:</span> {popularBull.fetProsent}%</p>
                      <p className="text-lg"><span className="font-semibold">Fruktbarhet:</span> {popularBull.fertility}%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Facebook Posts Section */}
            <section className="flex justify-center">
              <div className="w-full max-w-md">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">Facebook-innlegg</h3>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-blue-600 text-white p-6 flex items-center">
                    <Facebook className="mr-3 h-6 w-6" />
                    <CardTitle className="text-2xl text-white">Semex Norge på Facebook</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {facebookPosts.map((post, index) => (
                      <div key={post.id} className={`mb-6 pb-6 ${index !== facebookPosts.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <p className="text-sm text-gray-600 mb-2">
                          {new Date(post.date).toLocaleDateString("no-NO", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                        <p className="text-gray-800 text-lg">{post.content}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Product Cards */}
          <section className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Våre Tjenester</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Okser", "Genetikk", "Systemer"].map((product, index) => {
                const isOkser = product === "Okser";
                const imageUrl = isOkser
                  ? `/images/bulls/${["Apollo", "Blitz", "Thunder", "Comet", "Titan"][Math.floor(Math.random() * 5)]}.jpg`
                  : "/images/semexlogo.svg";

                return (
                  <Link href={isOkser ? "/pages/catalog" : "#"} key={index}>
                    <Card className="shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 relative group">
                      <CardHeader className="text-center bg-red-50 p-6">
                        <CardTitle className="text-2xl text-red-600">{product}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={imageUrl}
                            alt={`${product} levert av Semex`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xl font-semibold">Lær mer</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 text-center">
                            Våre {product.toLowerCase()} er utviklet med omsorg og ekspertise, for å sikre høyeste kvalitet og ytelse.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>

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
                  <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link href="/pages/catalog" className="text-gray-600 hover:text-red-600 transition-colors">
                    Okser
                  </Link>
                </li>
                <li>
                  <Link href="/pages/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                    Kontakt oss
                  </Link>
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
              <p className="text-gray-600 mb-2">Hårrvegen 165, 4362 Vigrestad</p>
              <p className="text-gray-600 mb-2">Telefon: (123) 456-7890</p>
              <p className="text-gray-600">E-post: Larshaarr01@gmail.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-red-200 text-center text-gray-600">
            © 2024 Semex Norge. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePageComponent