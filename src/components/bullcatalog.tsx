'use client'

import { Outfit } from 'next/font/google';
import { useState, useMemo } from 'react';
import { Header } from "@/components/components-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/Input"; // Corrected import statement
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link"; // Import Link component

const outfit = Outfit({ subsets: ['latin'] });

type Bull = {
  id: string;
  navn: string;
  image: string;
  rase: string;
  milkYield: number;
  proteinProsent: number;
  fetProsent: number;
  fertility: number;
};

const bulls: Bull[] = [
  { id: "001", navn: "Thunder", image: "/images/bulls/Thunder.jpg", rase: "Holstein", milkYield: 14500, proteinProsent: 3.5, fetProsent: 4.2, fertility: 95 },
  { id: "002", navn: "Blitz", image: "/images/bulls/Blitz.jpg", rase: "Jersey", milkYield: 9000, proteinProsent: 3.8, fetProsent: 5.1, fertility: 92 },
  { id: "003", navn: "Comet", image: "/images/bulls/Comet.jpg", rase: "Norwegian Red", milkYield: 11000, proteinProsent: 3.6, fetProsent: 4.5, fertility: 97 },
  { id: "004", navn: "Titan", image: "/images/bulls/Titan.jpg", rase: "Simmental", milkYield: 12000, proteinProsent: 3.4, fetProsent: 4.0, fertility: 94 },
  { id: "005", navn: "Apollo", image: "/images/bulls/Apollo.jpg", rase: "Brown Swiss", milkYield: 10500, proteinProsent: 3.7, fetProsent: 4.3, fertility: 96 },
  { id: "006", navn: "Atlas", image: "/images/bulls/Atlas.jpg", rase: "Hereford", milkYield: 9800, proteinProsent: 3.8, fetProsent: 4.7, fertility: 94 },
  { id: "007", navn: "Zeus", image: "/images/bulls/Zeus.jpg", rase: "Angus", milkYield: 8900, proteinProsent: 3.9, fetProsent: 5.0, fertility: 92 },
  { id: "008", navn: "Vulcan", image: "/images/bulls/Vulcan.jpg", rase: "Charolais", milkYield: 8500, proteinProsent: 3.6, fetProsent: 4.8, fertility: 91 },
  { id: "009", navn: "Neptune", image: "/images/bulls/Neptune.jpg", rase: "Guernsey", milkYield: 10400, proteinProsent: 3.9, fetProsent: 4.4, fertility: 93 },
  { id: "010", navn: "Mars", image: "/images/bulls/Mars.jpg", rase: "Montbéliarde", milkYield: 11250, proteinProsent: 3.7, fetProsent: 4.1, fertility: 95 },
  { id: "011", navn: "Odin", image: "/images/bulls/Odin.jpg", rase: "Limousin", milkYield: 9100, proteinProsent: 3.5, fetProsent: 4.6, fertility: 90 },
  { id: "012", navn: "Hercules", image: "/images/bulls/Hercules.jpg", rase: "Ayrshire", milkYield: 11500, proteinProsent: 3.6, fetProsent: 4.3, fertility: 92 },
  { id: "013", navn: "Ares", image: "/images/bulls/Ares.jpg", rase: "Shorthorn", milkYield: 10200, proteinProsent: 3.7, fetProsent: 4.5, fertility: 93 },
  { id: "014", navn: "Poseidon", image: "/images/bulls/Poseidon.jpg", rase: "Gelbvieh", milkYield: 9400, proteinProsent: 3.8, fetProsent: 4.7, fertility: 91 },
  { id: "015", navn: "Jupiter", image: "/images/bulls/Jupiter.jpg", rase: "Piedmontese", milkYield: 8800, proteinProsent: 3.9, fetProsent: 5.2, fertility: 89 },
  { id: "016", navn: "Pluto", image: "/images/bulls/Pluto.jpg", rase: "Normande", milkYield: 10000, proteinProsent: 3.5, fetProsent: 4.4, fertility: 96 },
  { id: "017", navn: "Helios", image: "/images/bulls/Helios.jpg", rase: "Salers", milkYield: 9700, proteinProsent: 3.8, fetProsent: 4.6, fertility: 94 },
  { id: "018", navn: "Thor", image: "/images/bulls/Thor.jpg", rase: "Belgian Blue", milkYield: 9200, proteinProsent: 3.7, fetProsent: 5.0, fertility: 91 },
  { id: "019", navn: "Phoenix", image: "/images/bulls/Phoenix.jpg", rase: "Tarentaise", milkYield: 10300, proteinProsent: 3.6, fetProsent: 4.2, fertility: 93 },
  { id: "020", navn: "Achilles", image: "/images/bulls/Achilles.jpg", rase: "Highland", milkYield: 7800, proteinProsent: 3.9, fetProsent: 5.1, fertility: 97 }
];

export default function BullCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRase, setSelectedRase] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredAndSortedBulls = useMemo(() => {
    return bulls
      .filter(bull => 
        bull.navn.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRase === 'all' || bull.rase === selectedRase)
      )
      .sort((a, b) => {
        if (sortBy === 'milkYield') return b.milkYield - a.milkYield;
        if (sortBy === 'proteinProsent') return b.proteinProsent - a.proteinProsent;
        if (sortBy === 'fetProsent') return b.fetProsent - a.fetProsent;
        if (sortBy === 'fertility') return b.fertility - a.fertility;
        return 0;
      });
  }, [searchTerm, selectedRase, sortBy]);

  const uniqueRases = useMemo(() => Array.from(new Set(bulls.map(bull => bull.rase))), []);

  return (
    <div className={`min-h-screen bg-white flex flex-col ${outfit.className}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Våre Okser</h2>
        
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="search">Søk etter navn</Label>
              <Input
                id="search"
                type="text"
                placeholder="Søk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="rase">Filtrer etter rase</Label>
              <Select value={selectedRase} onValueChange={setSelectedRase}>
                <SelectTrigger id="rase" className="bg-white text-black">
                  <SelectValue placeholder="Velg rase" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">Alle raser</SelectItem>
                  {uniqueRases.map(rase => (
                    <SelectItem key={rase} value={rase}>{rase}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="sort">Sorter etter</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger id="sort" className="bg-white text-black">
                  <SelectValue placeholder="Velg sortering" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="default">Standard</SelectItem>
                  <SelectItem value="milkYield">Melkeytelse</SelectItem>
                  <SelectItem value="proteinProsent">Protein %</SelectItem>
                  <SelectItem value="fetProsent">Fett %</SelectItem>
                  <SelectItem value="fertility">Fruktbarhet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedBulls.map((bull) => (
            <Link href={`/bulls/${bull.id}`} key={bull.id}>
                <Card className="shadow-md overflow-hidden transition-transform hover:scale-105 relative group">
                <CardHeader className="p-0">
                  <Image
                  src={bull.image}
                  alt={bull.navn}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover filter blur-[2px] transition-filter duration-300 group-hover:filter-none"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-2xl mb-2">{bull.navn}</CardTitle>
                  <Badge className="mb-2 bg-red-600 text-white">{bull.rase}</Badge>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold">Melkeytelse:</span> {bull.milkYield} kg
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Protein:</span> {bull.proteinProsent}%
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Fett:</span> {bull.fetProsent}%
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Fruktbarhet:</span> {bull.fertility}%
                    </p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">Trykk og lær mer</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-red-50 border-t border-red-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 Semex Norge. Alle rettigheter reservert.
        </div>
      </footer>
    </div>
  );
}
