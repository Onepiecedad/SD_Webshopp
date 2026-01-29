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
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Produkten hittades inte</h2>
        <Button onClick={() => navigate('/produkter')} className="bg-[#1a237e] hover:bg-[#283593]">
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-[#1a237e] transition-colors">Hem</Link>
          <span>/</span>
          <Link to="/produkter" className="hover:text-[#1a237e] transition-colors">Produkter</Link>
          <span>/</span>
          <span className="text-[#1a237e] font-semibold">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              {product.originalPrice && (
                <Badge className="absolute top-6 right-6 bg-red-500 text-white text-lg px-4 py-2">
                  SPARA {product.originalPrice - product.price} kr
                </Badge>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              {product.originalPrice ? (
                <>
                  <span className="text-4xl font-bold text-red-600">{product.price} kr</span>
                  <span className="text-2xl text-gray-400 line-through">{product.originalPrice} kr</span>
                  <Badge className="bg-red-500 text-white">REA!</Badge>
                </>
              ) : (
                <span className="text-4xl font-bold text-[#1a237e]">{product.price} kr</span>
              )}
            </div>

            {product.inStock ? (
              <div className="flex items-center gap-2 text-green-600 mb-8">
                <Check className="w-5 h-5" />
                <span className="font-semibold">I lager - Redo för leverans</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-600 mb-8">
                <span className="font-semibold">Tillfälligt slut i lager</span>
              </div>
            )}

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Välj storlek:</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-[#1a237e] bg-[#1a237e] text-white shadow-lg'
                          : 'border-gray-300 hover:border-[#1a237e] text-gray-700'
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
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Välj färg:</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-[#1a237e] bg-[#1a237e] text-white shadow-lg'
                          : 'border-gray-300 hover:border-[#1a237e] text-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Antal:</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 border-gray-300 hover:border-[#1a237e]"
                >
                  -
                </Button>
                <span className="text-2xl font-bold text-[#1a237e] w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 border-gray-300 hover:border-[#1a237e]"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 mb-8">
              <Button
                size="lg"
                className="w-full bg-[#1a237e] hover:bg-[#283593] text-white text-lg py-6 transition-all duration-300 hover:shadow-xl"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Lägg i varukorg - {product.price * quantity} kr
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white text-lg py-6 transition-all duration-300"
                onClick={() => navigate('/produkter')}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Fortsätt handla
              </Button>
            </div>

            {/* Features */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Truck className="w-6 h-6 text-[#1a237e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-1">Snabb leverans</h3>
                    <p className="text-sm text-gray-600">1-3 arbetsdagar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-1">Säker betalning</h3>
                    <p className="text-sm text-gray-600">Alla kortbetalningar är säkra</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Package className="w-6 h-6 text-[#ffd700]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-1">Volymrabatter</h3>
                    <p className="text-sm text-gray-600">Kontakta oss för stora beställningar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-[#1a237e] mb-8">Relaterade produkter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Card key={relProduct.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Link to={`/produkt/${relProduct.id}`}>
                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-[#1a237e]">{relProduct.name}</h3>
                      <p className="text-xl font-bold text-[#1a237e]">{relProduct.price} kr</p>
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
