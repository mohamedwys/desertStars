import React from "react";
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

interface LocationSectionProps {
  latitude?: number;
  longitude?: number;
}

const LocationSection: React.FC<LocationSectionProps> = ({ 
  latitude = 25.0457108, 
  longitude = 55.2339266 
}) => {
  // Generate Google Maps embed URL
  const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full inline-block mb-4">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Find Us in{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Motor City, Dubai
            </span>
          </h2>
          <p className="text-light text-lg max-w-3xl mx-auto leading-relaxed">
            Convenient location with easy access. Come visit us or get in touch to learn more.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cream-dark p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-4 rounded-xl flex-shrink-0">
                  <MapPin className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary mb-3">
                    Our Address
                  </h3>
                  <p className="text-light leading-relaxed text-base">
                    Kojak Building, Business<br />
                    Turin Boulevard Road, Al Hebiah 1<br />
                    Motor City 6/4<br />
                    Dubai, United Arab Emirates
                    </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-secondary font-bold hover:text-accent transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cream-dark p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-4 rounded-xl flex-shrink-0">
                  <Clock className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-primary mb-4">
                    Session Times
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                      <span className="text-light font-semibold">Monday (Desert Moon)</span>
                      <span className="text-dark font-bold">4:30 - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                      <span className="text-light font-semibold">Wednesday (Desert Wind)</span>
                      <span className="text-dark font-bold">4:30 - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cream-dark p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
              <h3 className="text-2xl font-black text-primary mb-6">Get In Touch</h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-light mb-1 font-semibold">Phone</p>
                    <a href="tel:+971554307037" className="text-dark font-bold hover:text-secondary transition-colors text-lg">
                      +971 55 430 7037
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-light mb-1 font-semibold">Email</p>
                    <a href="mailto:contact@desertstarsdxb.ae" className="text-dark font-bold hover:text-secondary transition-colors text-lg break-all">
                      contact@desertstarsdxb.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-cream-dark overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-secondary to-accent p-4 text-white text-center">
                <p className="font-bold text-lg">📍 We're Here</p>
              </div>
              <div className="w-full h-[550px] relative">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Desert Stars Choir Location - Motor City, Dubai"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;