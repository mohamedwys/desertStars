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
    <section id="booking" className="bg-gradient-to-b from-cream to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full inline-block mb-4">
            Book Your Session
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Secure Your{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Child's Place
            </span>
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto leading-relaxed">
            Limited spaces available. Choose your preferred session time and join our musical community today.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            {/* What to Expect Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cream-dark p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
              <h3 className="text-2xl font-black text-primary mb-6">
                What to Expect
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-xl flex-shrink-0">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark mb-1">Pick a Date</p>
                    <p className="text-light text-sm leading-relaxed">
                      Choose a date and time that works best for you from our available slots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark mb-1">Session Details</p>
                    <p className="text-light text-sm leading-relaxed">
                      90-minute sessions from 4:30 PM to 6:00 PM on Mondays or Wednesdays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark mb-1">Location</p>
                    <p className="text-light text-sm leading-relaxed">
                      AN Events, Kojak Building, Motor City, Dubai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes Card */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-cream-dark p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
              <h3 className="text-2xl font-black text-primary mb-6">
                Important Notes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-secondary font-bold text-xl mt-0.5">✓</span>
                  <span className="text-light leading-relaxed">Limited spaces available — book early to secure your spot.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary font-bold text-xl mt-0.5">✓</span>
                  <span className="text-light leading-relaxed">A confirmation email will be sent once your booking is complete.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary font-bold text-xl mt-0.5">✓</span>
                  <span className="text-light leading-relaxed">Please arrive 10 minutes before your session starts.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary font-bold text-xl mt-0.5">✓</span>
                  <span className="text-light leading-relaxed">Contact us at +971 55 430 7037 if you need to reschedule.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-cream-dark overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-secondary to-accent p-4 text-white text-center">
                <p className="font-bold text-lg">📅 Pick Your Perfect Time</p>
              </div>
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