export type Property = {
  id: string;
  name: string;
  location: string;
  category: "Residence" | "Villa" | "Commercial";
  price: string;
  size: string;
  beds: number;
  baths: number;
  tag: string;
  image: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: "FC-001",
    name: "Aurelia Sky Residence",
    location: "BSD City, Tangerang",
    category: "Residence",
    price: "Mulai Rp 2,8 M",
    size: "180 m²",
    beds: 3,
    baths: 3,
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    description: "Hunian kontemporer dengan ruang terbuka, material pilihan, dan pencahayaan alami."
  },
  {
    id: "FC-002",
    name: "The Nara Garden Villa",
    location: "Ubud, Bali",
    category: "Villa",
    price: "Mulai Rp 4,2 M",
    size: "260 m²",
    beds: 4,
    baths: 4,
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    description: "Villa privat dengan taman tropis, kolam renang, dan suasana yang tenang."
  },
  {
    id: "FC-003",
    name: "Forma Urban Loft",
    location: "Jakarta Selatan",
    category: "Residence",
    price: "Mulai Rp 1,9 M",
    size: "125 m²",
    beds: 2,
    baths: 2,
    tag: "New",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    description: "Ruang urban yang efisien, fleksibel, dan dekat dengan pusat aktivitas kota."
  },
  {
    id: "FC-004",
    name: "Nexus Creative Hub",
    location: "Surabaya, Jawa Timur",
    category: "Commercial",
    price: "Hubungi kami",
    size: "420 m²",
    beds: 0,
    baths: 4,
    tag: "Business",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    description: "Ruang komersial modern untuk bisnis, studio kreatif, dan kolaborasi."
  }
];

export const services = [
  { number: "01", title: "Property Advisory", text: "Pendampingan pencarian dan pemilihan properti berdasarkan kebutuhan, lokasi, dan rencana jangka panjang.", icon: "⌂" },
  { number: "02", title: "Architecture & Interior", text: "Konsep arsitektur dan interior yang mengutamakan fungsi, karakter, material, serta kualitas ruang.", icon: "◫" },
  { number: "03", title: "Smart Living", text: "Perencanaan rumah terhubung dengan pencahayaan, keamanan, kontrol energi, dan kenyamanan sehari-hari.", icon: "⌁" },
  { number: "04", title: "Project Collaboration", text: "Kolaborasi dengan pemilik lahan, pengembang, arsitek, kontraktor, dan mitra profesional.", icon: "↗" }
];

export const articles = [
  { category: "DESIGN", date: "12 NOV 2026", title: "Ruang yang lebih cerdas dimulai dari desain yang lebih manusiawi", read: "5 menit", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" },
  { category: "LIVING", date: "08 NOV 2026", title: "Membangun rumah yang siap berkembang bersama penghuninya", read: "7 menit", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85" },
  { category: "TECHNOLOGY", date: "02 NOV 2026", title: "Smart home: teknologi yang bekerja tanpa mengganggu", read: "4 menit", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85" }
];
