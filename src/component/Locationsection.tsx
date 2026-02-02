import React, { useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

interface LocationSectionProps {
  latitude?: number;
  longitude?: number;
}

const LocationSection: React.FC<LocationSectionProps> = ({ 
  latitude = 25.0457108, 
  longitude = 55.2339266 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="mapsJavaScriptAPI"]');
    
    if (existingScript) {
      // Script already loaded, initialize map
      if (window.google && window.google.maps) {
        initMap();
      } else {
        // Wait for it to load
        existingScript.addEventListener('load', initMap);
      }
      return;
    }

    // Load the keyless Google Maps API script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/somanchiu/Keyless-Google-Maps-API@v7.1/mapsJavaScriptAPI.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Wait a bit for google.maps to be fully available
      setTimeout(() => {
        if (window.google && window.google.maps) {
          initMap();
        }
      }, 100);
    };
    
    document.head.appendChild(script);
  }, [latitude, longitude]);

  const initMap = () => {
    if (!mapRef.current || !window.google || !window.google.maps) {
      console.error('Map container or Google Maps API not available');
      return;
    }

    try {
      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
        zoomControl: true,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;

      // Add custom marker
      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Our Location",
        animation: google.maps.Animation.DROP,
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

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
              <div 
                ref={mapRef} 
                className="w-full h-[600px]"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;