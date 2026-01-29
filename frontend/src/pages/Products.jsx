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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Våra produkter</h1>
          <p className="text-xl text-blue-100">Upptäck hela vårt sortiment av profilprodukter</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24 shadow-lg border-none">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-[#1a237e]" />
                  <h2 className="text-xl font-semibold text-[#1a237e]">Filtrera</h2>
                </div>
                
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? 'bg-[#1a237e] text-white shadow-md'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {selectedCategory !== 'alla' && (
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white"
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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-gray-600">
                Visar <span className="font-semibold text-[#1a237e]">{filteredProducts.length}</span> produkter
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sortera:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Utvalda</SelectItem>
                    <SelectItem value="name">Namn</SelectItem>
                    <SelectItem value="price-low">Pris: Låg till hög</SelectItem>
                    <SelectItem value="price-high">Pris: Hög till låg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Link to={`/produkt/${product.id}`}>
                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.originalPrice && (
                        <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold">
                          REA!
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-[#1a237e] group-hover:text-[#283593] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-2">
                        {product.originalPrice ? (
                          <>
                            <span className="text-xl font-bold text-red-600">{product.price} kr</span>
                            <span className="text-sm text-gray-400 line-through">{product.originalPrice} kr</span>
                          </>
                        ) : (
                          <span className="text-xl font-bold text-[#1a237e]">{product.price} kr</span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        className="w-full bg-[#1a237e] hover:bg-[#283593] text-white transition-all duration-300 hover:shadow-lg"
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
              <div className="text-center py-20">
                <p className="text-2xl text-gray-400 mb-4">Inga produkter hittades</p>
                <Button
                  onClick={() => setSelectedCategory('alla')}
                  className="bg-[#1a237e] hover:bg-[#283593]"
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
