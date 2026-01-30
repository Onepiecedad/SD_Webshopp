import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, X } from 'lucide-react';
import { products, categories } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('alla');
  const [sortBy, setSortBy] = useState('featured');

  let filteredProducts = selectedCategory === 'alla'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sd-navy-50/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="premium-heading text-4xl lg:text-5xl font-bold mb-3 text-white">
            Våra <span className="text-gradient">produkter</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60">Upptäck hela vårt sortiment av profilprodukter</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24 glass-card border-0 rounded-2xl">
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-5 lg:mb-6">
                  <div className="w-8 h-8 rounded-lg bg-sd-blue/20 flex items-center justify-center">
                    <Filter className="w-4 h-4 text-sd-blue" />
                  </div>
                  <h2 className="text-lg lg:text-xl font-semibold text-white">Filtrera</h2>
                </div>

                <div className="space-y-1.5 lg:space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2.5 lg:py-3 rounded-xl transition-all duration-300 text-sm lg:text-base ${selectedCategory === cat.id
                          ? 'bg-sd-blue text-white shadow-glow'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {selectedCategory !== 'alla' && (
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-white/20 text-white hover:bg-sd-blue hover:border-sd-blue text-sm"
                    onClick={() => setSelectedCategory('alla')}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Rensa filter
                  </Button>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
              <p className="text-white/60 text-sm lg:text-base">
                Visar <span className="font-semibold text-sd-blue">{filteredProducts.length}</span> produkter
              </p>

              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm lg:text-base">Sortera:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px] lg:w-[180px] glass-button border-white/20 text-white text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-sd-navy border-white/20">
                    <SelectItem value="featured" className="text-white hover:bg-white/10">Utvalda</SelectItem>
                    <SelectItem value="name" className="text-white hover:bg-white/10">Namn</SelectItem>
                    <SelectItem value="price-low" className="text-white hover:bg-white/10">Pris: Låg till hög</SelectItem>
                    <SelectItem value="price-high" className="text-white hover:bg-white/10">Pris: Hög till låg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group glass-card glass-card-hover overflow-hidden border-0 transition-all duration-500 hover:-translate-y-2 rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link to={`/produkt/${product.id}`}>
                    <div className="relative overflow-hidden bg-sd-light aspect-square rounded-t-2xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {product.originalPrice && (
                        <Badge className="absolute top-4 right-4 bg-sd-pink hover:bg-sd-pink text-sd-navy font-bold text-xs lg:text-sm">
                          REA!
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 lg:p-5">
                      <h3 className="text-base lg:text-lg font-semibold mb-2 text-white group-hover:text-sd-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-white/50 mb-3 lg:mb-4 text-xs lg:text-sm line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-2">
                        {product.originalPrice ? (
                          <>
                            <span className="text-xl lg:text-2xl font-bold text-sd-yellow">{product.price} kr</span>
                            <span className="text-xs lg:text-sm text-white/40 line-through">{product.originalPrice} kr</span>
                          </>
                        ) : (
                          <span className="text-xl lg:text-2xl font-bold text-white">{product.price} kr</span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 lg:p-5 pt-0">
                      <Button
                        className="w-full bg-sd-blue hover:bg-sd-blue-dark text-white transition-all duration-300 hover:shadow-glow py-4 lg:py-5 text-sm font-semibold rounded-xl"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Lägg i varukorg
                      </Button>
                    </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 lg:py-20">
                <p className="text-xl lg:text-2xl text-white/40 mb-4">Inga produkter hittades</p>
                <Button
                  onClick={() => setSelectedCategory('alla')}
                  className="bg-sd-blue hover:bg-sd-blue-dark"
                >
                  Visa alla produkter
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
