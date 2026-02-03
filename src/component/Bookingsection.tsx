import React, { useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const BookingSection: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Session
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reserve your spot today. Limited spaces available across two groups only.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            {/* What to Expect Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pick a Date</p>
                    <p className="text-gray-500 text-sm">
                      Choose a date and time that works best for you from our available slots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Session Details</p>
                    <p className="text-gray-500 text-sm">
                      Sessions run from 4:30 PM to 6:00 PM on Mondays and Wednesdays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-500 text-sm">
                      AN Events, Kojak Building, Motor City, Dubai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-600">Limited spaces available — book early to secure your spot.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-600">A confirmation email will be sent once your booking is complete.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-600">Please arrive 10 minutes before your session starts.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-600">Contact us at +971 55 430 7037 if you need to reschedule.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/desertstarschoir/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;