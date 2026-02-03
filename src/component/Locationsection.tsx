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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to see you. Drop by during our business hours or reach out to us anytime, limited spaces available across two groups only.
            </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AN Events, Kojak Building<br />
                    Motor City<br />
                    Dubai, United Arab Emirates
                    </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Monday</span>
                      <span className="text-gray-900 font-semibold">4:30 PM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Wednesdays</span>
                      <span className="text-gray-900 font-semibold">4:30 PM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+971554307037" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                      +971 55 430 7037
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:hello@company.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                      hello@company.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-[600px] relative">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
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