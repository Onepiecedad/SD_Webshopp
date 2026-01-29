import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, TrendingUp, Package, Shield, Truck } from 'lucide-react';
import { products, categories } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('alla');
  
  const filteredProducts = selectedCategory === 'alla' 
    ? products.filter(p => p.featured)
    : products.filter(p => p.category === selectedCategory);

  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1a237e] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png" 
                alt="SD Skåne" 
                className="w-32 h-32 object-contain animate-float"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              SD Skånebutiken
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Välkommen till vår officiella webbutik för profilprodukter och kläder
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#ffd700] hover:bg-[#ffed4e] text-[#1a237e] font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link to="/produkter">Utforska produkter</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#1a237e] font-semibold text-lg px-8 py-6 transition-all duration-300"
                asChild
              >
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Truck className="w-8 h-8 text-[#1a237e]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">Snabb leverans</h3>
                <p className="text-gray-600">Vi skickar inom 1-3 arbetsdagar</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-[#ffd700]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">Hög kvalitet</h3>
                <p className="text-gray-600">Noggrant utvalda produkter</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">Volymrabatter</h3>
                <p className="text-gray-600">Särskilda priser för stora beställningar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4">Utvalda produkter</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Upptäck våra populäraste produkter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
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
                    <h3 className="text-xl font-semibold mb-2 text-[#1a237e] group-hover:text-[#283593] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2">
                      {product.originalPrice ? (
                        <>
                          <span className="text-2xl font-bold text-red-600">{product.price} kr</span>
                          <span className="text-lg text-gray-400 line-through">{product.originalPrice} kr</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-[#1a237e]">{product.price} kr</span>
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
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-[#1a237e] hover:bg-[#283593] text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link to="/produkter">Se alla produkter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a237e] to-[#283593] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Behöver du kampanjmaterial?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vi erbjuder volymrabatter för större beställningar. Perfekt för kampanjer och event!
          </p>
          <Button 
            size="lg" 
            className="bg-[#ffd700] hover:bg-[#ffed4e] text-[#1a237e] font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            asChild
          >
            <Link to="/kontakt">Kontakta oss för offert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
