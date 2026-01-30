import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Truck, Shield, Package } from 'lucide-react';
import { products } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = ({ addToCart }) => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sd-navy/50 to-sd-navy pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated logo */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-sd-blue/20 rounded-full blur-3xl animate-pulse-slow" />
                <img
                  src="https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png"
                  alt="SD Skåne"
                  className="w-36 h-36 lg:w-44 lg:h-44 object-contain animate-float drop-shadow-2xl relative z-10"
                />
              </div>
            </div>

            {/* Main heading */}
            <h1 className="premium-heading text-5xl sm:text-6xl lg:text-8xl mb-6 leading-tight tracking-tight text-white">
              SD <span className="text-gradient">Skånebutiken</span>
            </h1>

            <p className="text-lg lg:text-2xl mb-10 text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Välkommen till vår officiella webbutik för profilprodukter och kläder
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy font-bold text-base lg:text-lg px-8 lg:px-10 py-6 lg:py-7 transition-all duration-500 hover:scale-105 shadow-glow-yellow shine-effect rounded-xl"
                asChild
              >
                <Link to="/produkter">Utforska produkter</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-button border-2 border-white/30 text-white hover:bg-white/10 hover:border-sd-blue font-semibold text-base lg:text-lg px-8 lg:px-10 py-6 lg:py-7 transition-all duration-500 rounded-xl"
                asChild
              >
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="glass-card glass-card-hover text-center border-0 transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <CardContent className="pt-8 pb-6 lg:pt-10 lg:pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-sd-blue/20 rounded-2xl mb-5 transition-transform duration-500 hover:scale-110 border border-sd-blue/30">
                  <Truck className="w-8 h-8 lg:w-9 lg:h-9 text-sd-blue" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white">Snabb leverans</h3>
                <p className="text-white/60 leading-relaxed">Vi skickar inom 1-3 arbetsdagar</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="glass-card glass-card-hover text-center border-0 transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <CardContent className="pt-8 pb-6 lg:pt-10 lg:pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-sd-yellow/20 rounded-2xl mb-5 transition-transform duration-500 hover:scale-110 border border-sd-yellow/30">
                  <Shield className="w-8 h-8 lg:w-9 lg:h-9 text-sd-yellow" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white">Hög kvalitet</h3>
                <p className="text-white/60 leading-relaxed">Noggrant utvalda produkter</p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="glass-card glass-card-hover text-center border-0 transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <CardContent className="pt-8 pb-6 lg:pt-10 lg:pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-sd-green/20 rounded-2xl mb-5 transition-transform duration-500 hover:scale-110 border border-sd-green/30">
                  <Package className="w-8 h-8 lg:w-9 lg:h-9 text-sd-green" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white">Volymrabatter</h3>
                <p className="text-white/60 leading-relaxed">Särskilda priser för stora beställningar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 relative">
        {/* Section background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sd-navy-50/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="premium-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 lg:mb-6">
              Utvalda <span className="text-gradient">produkter</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light">
              Upptäck våra populäraste produkter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group glass-card glass-card-hover overflow-hidden border-0 transition-all duration-500 hover:-translate-y-3 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/produkt/${product.id}`}>
                  <div className="relative overflow-hidden bg-sd-light aspect-square rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-sd-pink hover:bg-sd-pink text-sd-navy font-bold px-3 py-1.5 text-sm rounded-lg shadow-lg">
                        REA!
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold mb-2 text-white group-hover:text-sd-blue transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-white/50 mb-4 line-clamp-2 leading-relaxed text-sm lg:text-base">{product.description}</p>
                    <div className="flex items-center gap-3">
                      {product.originalPrice ? (
                        <>
                          <span className="text-2xl lg:text-3xl font-bold text-sd-yellow">{product.price} kr</span>
                          <span className="text-base lg:text-lg text-white/40 line-through">{product.originalPrice} kr</span>
                        </>
                      ) : (
                        <span className="text-2xl lg:text-3xl font-bold text-white">{product.price} kr</span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 lg:p-6 pt-0">
                    <Button
                      className="w-full bg-sd-blue hover:bg-sd-blue-dark text-white transition-all duration-500 hover:shadow-glow py-5 lg:py-6 text-sm lg:text-base font-semibold rounded-xl"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Lägg i varukorg
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Button
              size="lg"
              className="bg-sd-blue hover:bg-sd-blue-dark text-white px-10 lg:px-12 py-6 lg:py-7 text-base lg:text-lg font-semibold transition-all duration-500 hover:shadow-glow rounded-xl shine-effect"
              asChild
            >
              <Link to="/produkter">Se alla produkter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sd-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 lg:p-16 rounded-3xl">
            <h2 className="premium-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6 lg:mb-8">
              Behöver du <span className="text-gradient-gold">kampanjmaterial?</span>
            </h2>
            <p className="text-base lg:text-xl text-white/60 mb-8 lg:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Vi erbjuder volymrabatter för större beställningar. Perfekt för kampanjer och event!
            </p>
            <Button
              size="lg"
              className="bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy font-bold text-base lg:text-lg px-10 lg:px-12 py-6 lg:py-7 transition-all duration-500 hover:scale-105 shadow-glow-yellow shine-effect rounded-xl"
              asChild
            >
              <Link to="/kontakt">Kontakta oss för offert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
