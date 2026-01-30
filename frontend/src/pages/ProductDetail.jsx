import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Check, Package, Truck, Shield } from 'lucide-react';
import { products } from '../mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from '../hooks/use-toast';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Produkten hittades inte</h2>
        <Button onClick={() => navigate('/produkter')} className="bg-sd-blue hover:bg-sd-blue-dark">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tillbaka till produkter
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    addToCart(cartItem);
    toast({
      title: "Produkt tillagd!",
      description: `${product.name} har lagts till i varukorgen.`,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs lg:text-sm text-white/50 mb-6 lg:mb-8">
          <Link to="/" className="hover:text-sd-blue transition-colors">Hem</Link>
          <span>/</span>
          <Link to="/produkter" className="hover:text-sd-blue transition-colors">Produkter</Link>
          <span>/</span>
          <span className="text-sd-blue font-semibold">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="glass-card rounded-2xl lg:rounded-3xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              {product.originalPrice && (
                <Badge className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-sd-pink text-sd-navy text-sm lg:text-lg px-3 lg:px-4 py-1.5 lg:py-2 font-bold">
                  SPARA {product.originalPrice - product.price} kr
                </Badge>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{product.name}</h1>

            <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-5 lg:mb-6">
              {product.originalPrice ? (
                <>
                  <span className="text-3xl lg:text-4xl font-bold text-sd-yellow">{product.price} kr</span>
                  <span className="text-xl lg:text-2xl text-white/40 line-through">{product.originalPrice} kr</span>
                  <Badge className="bg-sd-pink text-sd-navy font-bold">REA!</Badge>
                </>
              ) : (
                <span className="text-3xl lg:text-4xl font-bold text-white">{product.price} kr</span>
              )}
            </div>

            {product.inStock ? (
              <div className="flex items-center gap-2 text-sd-green mb-6 lg:mb-8">
                <Check className="w-5 h-5" />
                <span className="font-semibold text-sm lg:text-base">I lager - Redo för leverans</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sd-pink mb-6 lg:mb-8">
                <span className="font-semibold text-sm lg:text-base">Tillfälligt slut i lager</span>
              </div>
            )}

            <p className="text-base lg:text-lg text-white/60 mb-6 lg:mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-semibold text-white/80 mb-3">Välj storlek:</label>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${selectedSize === size
                          ? 'bg-sd-blue text-white shadow-glow'
                          : 'glass-button border border-white/20 text-white hover:border-sd-blue'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6 lg:mb-8">
                <label className="block text-sm font-semibold text-white/80 mb-3">Välj färg:</label>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${selectedColor === color
                          ? 'bg-sd-blue text-white shadow-glow'
                          : 'glass-button border border-white/20 text-white hover:border-sd-blue'
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6 lg:mb-8">
              <label className="block text-sm font-semibold text-white/80 mb-3">Antal:</label>
              <div className="flex items-center gap-3 lg:gap-4">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 lg:w-12 lg:h-12 p-0 border-white/20 text-white hover:bg-white/10"
                >
                  -
                </Button>
                <span className="text-xl lg:text-2xl font-bold text-white w-10 lg:w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 p-0 border-white/20 text-white hover:bg-white/10"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <Button
                size="lg"
                className="w-full bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy text-base lg:text-lg py-5 lg:py-6 transition-all duration-300 hover:shadow-glow-yellow rounded-xl font-bold"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Lägg i varukorg - {product.price * quantity} kr
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/20 text-white hover:bg-sd-blue hover:border-sd-blue text-base lg:text-lg py-5 lg:py-6 transition-all duration-300 rounded-xl"
                onClick={() => navigate('/produkter')}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Fortsätt handla
              </Button>
            </div>

            {/* Features */}
            <Card className="glass-card border-0 rounded-2xl">
              <CardContent className="p-5 lg:p-6 space-y-4">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="p-2.5 lg:p-3 bg-sd-blue/20 rounded-xl border border-sd-blue/30">
                    <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-sd-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">Snabb leverans</h3>
                    <p className="text-xs lg:text-sm text-white/50">1-3 arbetsdagar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="p-2.5 lg:p-3 bg-sd-green/20 rounded-xl border border-sd-green/30">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-sd-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">Säker betalning</h3>
                    <p className="text-xs lg:text-sm text-white/50">Alla kortbetalningar är säkra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="p-2.5 lg:p-3 bg-sd-yellow/20 rounded-xl border border-sd-yellow/30">
                    <Package className="w-5 h-5 lg:w-6 lg:h-6 text-sd-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">Volymrabatter</h3>
                    <p className="text-xs lg:text-sm text-white/50">Kontakta oss för stora beställningar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
              Relaterade <span className="text-gradient">produkter</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {relatedProducts.map((relProduct, index) => (
                <Card
                  key={relProduct.id}
                  className="group glass-card glass-card-hover overflow-hidden border-0 transition-all duration-500 hover:-translate-y-2 rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/produkt/${relProduct.id}`}>
                    <div className="relative overflow-hidden bg-sd-light aspect-square rounded-t-2xl">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardContent className="p-4 lg:p-5">
                      <h3 className="text-base lg:text-lg font-semibold mb-2 text-white group-hover:text-sd-blue transition-colors">{relProduct.name}</h3>
                      <p className="text-xl lg:text-2xl font-bold text-sd-yellow">{relProduct.price} kr</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
