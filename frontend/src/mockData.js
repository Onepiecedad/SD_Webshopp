// Mock data för SD Skånebutiken

export const products = [
  {
    id: 1,
    name: "Hoodie Unisex - Sverigedemokraterna",
    category: "profilklader",
    price: 215,
    originalPrice: 299,
    image: "https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/j6j0p1yh_image.png",
    description: "Bekväm hoodie i hög kvalitet med Sverigedemokraternas logotyp. Perfekt för vardag och kampanj.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Grå", "Rosa", "Gul", "Ljusgrön", "Ljusblå"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Vinterkit 2025",
    category: "kampanjer",
    price: 299,
    image: "https://sdskanebutiken.se/wp-content/uploads/2025/11/vinterkit_2-300x297.png",
    description: "Komplett vinterkit med halsduk, mössa och isskrapa. Perfekt för vintern!",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "SD Keps",
    category: "profilklader",
    price: 100,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=SD+Keps",
    description: "Klassisk keps med broderad logotyp. Justerbar storlek.",
    inStock: true
  },
  {
    id: 4,
    name: "SD Mössa",
    category: "profilklader",
    price: 150,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=SD+Mössa",
    description: "Varm stickad mössa för kalla vinterdagar.",
    inStock: true
  },
  {
    id: 5,
    name: "Nyckelband 50-pack",
    category: "profilprodukter",
    price: 450,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Nyckelband",
    description: "Nyckelband med Sverigedemokraternas logotyp. Perfekt för kampanj och event.",
    inStock: true
  },
  {
    id: 6,
    name: "Jimmie Åkesson - Tio år som partiledare",
    category: "bocker",
    price: 356,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Bok",
    description: "Signerad bok om Jimmie Åkessons tio år som partiledare.",
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Pappersmuggar SD (50-pack)",
    category: "profilprodukter",
    price: 70,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Muggar",
    description: "Pappersmuggar med SD-logotyp. 50 stycken per förpackning.",
    inStock: true
  },
  {
    id: 8,
    name: "Halsduk SD",
    category: "profilklader",
    price: 150,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Halsduk",
    description: "Varm halsduk i mjukt material med SD-motiv.",
    inStock: true
  },
  {
    id: 9,
    name: "Gummiarmband (10-pack)",
    category: "profilprodukter",
    price: 50,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Armband",
    description: "Gummiarmband i partiets färger. 10 stycken per förpackning.",
    inStock: true
  },
  {
    id: 10,
    name: "Läppcerat SD",
    category: "profilprodukter",
    price: 25,
    originalPrice: 35,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Läppcerat",
    description: "Läppcerat med partilogotyp. Perfekt som giveaway.",
    inStock: true
  },
  {
    id: 11,
    name: "Bordsflagga",
    category: "profilprodukter",
    price: 50,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Bordsflagga",
    description: "Elegant bordsflagga för kontor eller hem.",
    inStock: true
  },
  {
    id: 12,
    name: "Isskrapa",
    category: "profilprodukter",
    price: 30,
    image: "https://via.placeholder.com/400x400/1a237e/ffffff?text=Isskrapa",
    description: "Praktisk isskrapa för bilen med SD-logotyp.",
    inStock: true
  }
];

export const categories = [
  {
    id: "alla",
    name: "Alla produkter",
    slug: "alla"
  },
  {
    id: "profilklader",
    name: "Profilkläder",
    slug: "profilklader",
    description: "Kläder och accessoarer för alla tillfällen"
  },
  {
    id: "profilprodukter",
    name: "Profilprodukter",
    slug: "profilprodukter",
    description: "Kampanjmaterial och giveaways"
  },
  {
    id: "bocker",
    name: "Böcker",
    slug: "bocker",
    description: "Litteratur om svensk politik"
  },
  {
    id: "kampanjer",
    name: "Kampanjer & Erbjudanden",
    slug: "kampanjer",
    description: "Aktuella kampanjer och specialerbjudanden"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Svensson",
    location: "Malmö",
    text: "Fantastisk kvalitet på produkterna! Snabb leverans och proffsig service.",
    rating: 5
  },
  {
    id: 2,
    name: "Johan Andersson",
    location: "Helsingborg",
    text: "Perfekt för kampanjarbete. Bra priser och stora volymer.",
    rating: 5
  },
  {
    id: 3,
    name: "Anna Karlsson",
    location: "Lund",
    text: "Hög kvalitet och snabb leverans. Rekommenderas varmt!",
    rating: 5
  }
];
