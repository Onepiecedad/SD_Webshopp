import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 49;
  const finalTotal = total + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Varukorg</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center border-none shadow-lg">
            <CardContent className="p-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Din varukorg är tom</h2>
              <p className="text-gray-600 mb-8">Lägg till några produkter för att komma igång!</p>
              <Button 
                size="lg"
                className="bg-[#1a237e] hover:bg-[#283593] text-white px-8 py-6 text-lg"
                asChild
              >
                <Link to="/produkter">Utforska produkter</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Varukorg</h1>
          <p className="text-xl text-blue-100">{cart.length} {cart.length === 1 ? 'produkt' : 'produkter'} i varukorgen</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Image */}
                    <Link to={`/produkt/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <Link to={`/produkt/${item.id}`}>
                        <h3 className="text-xl font-semibold text-[#1a237e] hover:text-[#283593] transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        {item.selectedSize && (
                          <p>Storlek: <span className="font-semibold">{item.selectedSize}</span></p>
                        )}
                        {item.selectedColor && (
                          <p>Färg: <span className="font-semibold">{item.selectedColor}</span></p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 p-0 border-2"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-lg font-semibold text-[#1a237e] w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="w-8 h-8 p-0 border-2"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                          <p className="text-2xl font-bold text-[#1a237e]">{item.price * item.quantity} kr</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              className="w-full border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white text-lg py-6"
              asChild
            >
              <Link to="/produkter">Fortsätt handla</Link>
            </Button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Sammanfattning</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Delsumma:</span>
                    <span className="font-semibold">{total} kr</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Frakt:</span>
                    <span className="font-semibold">{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
                  </div>
                  {total < 500 && (
                    <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                      Handla för {500 - total} kr till för fri frakt!
                    </p>
                  )}
                  <Separator />
                  <div className="flex justify-between text-xl font-bold text-[#1a237e]">
                    <span>Totalt:</span>
                    <span>{finalTotal} kr</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#1a237e] hover:bg-[#283593] text-white text-lg py-6 transition-all duration-300 hover:shadow-xl mb-3"
                >
                  Till kassan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-gray-500 text-center">Ink moms enligt svensk lag</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#1a237e] mb-3">Behöver du hjälp?</h3>
                <p className="text-sm text-gray-600 mb-4">Kontakta oss för volymrabatter eller frågor om produkter.</p>
                <Button
                  variant="outline"
                  className="w-full border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white"
                  asChild
                >
                  <Link to="/kontakt">Kontakta oss</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
