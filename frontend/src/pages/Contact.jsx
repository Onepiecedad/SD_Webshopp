import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer till dig inom kort.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <div className="relative py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="premium-heading text-4xl lg:text-5xl font-bold mb-3 text-white">
            Kontakta <span className="text-gradient">oss</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60">Vi hjälper dig gärna med dina frågor</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 rounded-2xl">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5 lg:mb-6">Skicka ett meddelande</h2>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                      Namn *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full glass-input border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-sd-blue transition-colors"
                      placeholder="Ditt namn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">
                      E-post *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full glass-input border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-sd-blue transition-colors"
                      placeholder="din@email.se"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white/80 mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full glass-input border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-sd-blue transition-colors"
                      placeholder="070-123 45 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">
                      Meddelande *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full glass-input border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-sd-blue transition-colors resize-none"
                      placeholder="Hur kan vi hjälpa dig?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-sd-blue hover:bg-sd-blue-dark text-white text-base lg:text-lg py-5 lg:py-6 transition-all duration-300 hover:shadow-glow rounded-xl font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Skicka meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6">
            <Card className="glass-card glass-card-hover border-0 rounded-2xl transition-all duration-300">
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sd-blue/20 rounded-xl border border-sd-blue/30">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-sd-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 lg:mb-2 text-sm lg:text-base">Telefon</h3>
                    <a href="tel:070-8146884" className="text-white/60 hover:text-sd-blue transition-colors text-sm lg:text-base">
                      070-814 68 84
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover border-0 rounded-2xl transition-all duration-300">
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sd-yellow/20 rounded-xl border border-sd-yellow/30">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-sd-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 lg:mb-2 text-sm lg:text-base">E-post</h3>
                    <a href="mailto:skane@sd.se" className="text-white/60 hover:text-sd-blue transition-colors text-sm lg:text-base">
                      skane@sd.se
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover border-0 rounded-2xl transition-all duration-300">
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sd-green/20 rounded-xl border border-sd-green/30">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-sd-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 lg:mb-2 text-sm lg:text-base">Adress</h3>
                    <p className="text-white/60 text-sm lg:text-base">SD Skånes distriktskansli</p>
                    <p className="text-white/60 text-sm lg:text-base">Hässleholm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover border-0 rounded-2xl transition-all duration-300">
              <CardContent className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sd-pink/20 rounded-xl border border-sd-pink/30">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-sd-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 lg:mb-2 text-sm lg:text-base">Fysisk butik</h3>
                    <p className="text-white/60 text-sm lg:text-base">Efter bokning</p>
                    <p className="text-xs lg:text-sm text-white/40 mt-1">Kontakta oss för att boka tid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volymrabatter Info */}
        <Card className="max-w-4xl mx-auto mt-10 lg:mt-12 glass-card border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8 lg:p-10 text-center relative overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sd-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white relative z-10">
              Intresserad av <span className="text-gradient-gold">volymrabatter?</span>
            </h2>
            <p className="text-base lg:text-lg text-white/60 mb-6 lg:mb-8 relative z-10">
              Vi erbjuder fördelaktiga priser för större beställningar. Perfekt för kampanjer, event och föreningar!
            </p>
            <Button
              size="lg"
              className="bg-sd-yellow hover:bg-sd-yellow-light text-sd-navy font-bold text-base lg:text-lg px-8 py-5 lg:py-6 transition-all duration-300 hover:scale-105 shadow-glow-yellow rounded-xl relative z-10"
            >
              Begär offert
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
