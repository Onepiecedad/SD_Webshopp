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
    // Mock form submission
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-xl text-blue-100">Vi hjälper dig gärna med dina frågor</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#1a237e] mb-6">Skicka ett meddelande</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Namn *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-[#1a237e] transition-colors"
                      placeholder="Ditt namn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-post *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-[#1a237e] transition-colors"
                      placeholder="din@email.se"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-[#1a237e] transition-colors"
                      placeholder="070-123 45 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Meddelande *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border-2 border-gray-300 focus:border-[#1a237e] transition-colors resize-none"
                      placeholder="Hur kan vi hjälpa dig?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1a237e] hover:bg-[#283593] text-white text-lg py-6 transition-all duration-300 hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Skicka meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-[#1a237e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-2">Telefon</h3>
                    <a href="tel:070-8146884" className="text-gray-700 hover:text-[#1a237e] transition-colors">
                      070-814 68 84
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Mail className="w-6 h-6 text-[#ffd700]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-2">E-post</h3>
                    <a href="mailto:skane@sd.se" className="text-gray-700 hover:text-[#1a237e] transition-colors">
                      skane@sd.se
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-2">Adress</h3>
                    <p className="text-gray-700">SD Skånes distriktskansli</p>
                    <p className="text-gray-700">Hässleholm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a237e] mb-2">Fysisk butik</h3>
                    <p className="text-gray-700">Efter bokning</p>
                    <p className="text-sm text-gray-600 mt-1">Kontakta oss för att boka tid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volymrabatter Info */}
        <Card className="max-w-4xl mx-auto mt-12 border-none shadow-lg bg-gradient-to-br from-[#1a237e] to-[#283593] text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Intresserad av volymrabatter?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Vi erbjuder fördelaktiga priser för större beställningar. Perfekt för kampanjer, event och föreningar!
            </p>
            <Button
              size="lg"
              className="bg-[#ffd700] hover:bg-[#ffed4e] text-[#1a237e] font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
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
