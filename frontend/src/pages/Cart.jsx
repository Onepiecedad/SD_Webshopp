import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 500 ? 0 : 49;
  const finalTotal = total + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="relative py-12 lg:py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="premium-heading text-4xl lg:text-5xl font-bold mb-4 text-white">
              Varu<span className="text-gradient">korg</span>
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <Card className="max-w-2xl mx-auto text-center glass-card border-0 rounded-2xl">
            <CardContent className="p-10 lg:p-12">
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full mb-6">
                <ShoppingBag className="w-10 h-10 lg:w-12 lg:h-12 text-white/40" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Din varukorg är tom</h2>
              <p className="text-white/60 mb-8">Lägg till några produkter för att komma igång!</p>
              <Button
                size="lg"
                className="bg-sd-blue hover:bg-sd-blue-dark text-white px-8 py-5 lg:py-6 text-base lg:text-lg font-semibold rounded-xl hover:shadow-glow"
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
    <div className="min-h-screen">
      <div className="relative py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="premium-heading text-4xl lg:text-5xl font-bold mb-3 text-white">
            Varu<span className="text-gradient">korg</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60">{cart.length} {cart.length === 1 ? 'produkt' : 'produkter'} i varukorgen</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <Card key={index} className="glass-card glass-card-hover border-0 transition-all duration-300 rounded-2xl">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                    {/* Image */}
                    <Link to={`/produkt/${item.id}`} className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-28 lg:w-32 h-28 lg:h-32 object-cover rounded-xl hover:opacity-80 transition-opacity"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <Link to={`/produkt/${item.id}`}>
                        <h3 className="text-lg lg:text-xl font-semibold text-white hover:text-sd-blue transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>

                      <div className="space-y-1 text-xs lg:text-sm text-white/50 mb-4">
                        {item.selectedSize && (
                          <p>Storlek: <span className="font-semibold text-white/70">{item.selectedSize}</span></p>
                        )}
                        {item.selectedColor && (
                          <p>Färg: <span className="font-semibold text-white/70">{item.selectedColor}</span></p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 lg:gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-base lg:text-lg font-semibold text-white w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                          <p className="text-xl lg:text-2xl font-bold text-sd-yellow">{item.price * item.quantity} kr</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(index)}
                            className="text-sd-pink hover:text-red-400 hover:bg-red-500/10"
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
              className="w-full border-2 border-white/20 text-white hover:bg-sd-blue hover:border-sd-blue text-base lg:text-lg py-5 lg:py-6 rounded-xl"
              asChild
            >
              <Link to="/produkter">Fortsätt handla</Link>
            </Button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-0 sticky top-24 rounded-2xl">
              <CardContent className="p-5 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-5 lg:mb-6">Sammanfattning</h2>

                <div className="space-y-3 lg:space-y-4 mb-5 lg:mb-6">
                  <div className="flex justify-between text-white/70 text-sm lg:text-base">
                    <span>Delsumma:</span>
                    <span className="font-semibold text-white">{total} kr</span>
                  </div>
                  <div className="flex justify-between text-white/70 text-sm lg:text-base">
                    <span>Frakt:</span>
                    <span className="font-semibold text-white">{shipping === 0 ? 'Gratis' : `${shipping} kr`}</span>
                  </div>
                  {total < 500 && (
                    <p className="text-xs lg:text-sm text-sd-blue bg-sd-blue/10 p-3 rounded-lg border border-sd-blue/20">
                      Handla för {500 - total} kr till för fri frakt!
                    </p>
                  )}
                  <Separator className="bg-white/10" />
                  <div className="flex justify-between text-lg lg:text-xl font-bold text-white">
                    <span>Totalt:</span>
                    <span className="text-sd-yellow">{finalTotal} kr</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy text-base lg:text-lg py-5 lg:py-6 transition-all duration-300 hover:shadow-glow-yellow mb-3 font-bold rounded-xl"
                >
                  Till kassan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-white/40 text-center">Ink moms enligt svensk lag</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 mt-4 lg:mt-6 rounded-2xl">
              <CardContent className="p-5 lg:p-6">
                <h3 className="font-semibold text-white mb-2 lg:mb-3 text-sm lg:text-base">Behöver du hjälp?</h3>
                <p className="text-xs lg:text-sm text-white/50 mb-4">Kontakta oss för volymrabatter eller frågor om produkter.</p>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-sd-blue hover:border-sd-blue text-sm"
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
