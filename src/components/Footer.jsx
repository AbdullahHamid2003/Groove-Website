const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Main Content */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-light mb-8 leading-tight">
              Join us for an unforgettable experience
            </h2>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Location */}
              <div>
                <h3 className="text-yellow-400 text-sm font-medium tracking-widest mb-4 uppercase">
                  LOCATION
                </h3>
                <div className="text-white/80 text-sm leading-relaxed">
                  <p>Al-Hizam Park</p>
                  <p>Al-Semalli, Yanbu Al Bahr 46455</p>
                  <p>Riyadh Saudi Arabia</p>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-yellow-400 text-sm font-medium tracking-widest mb-4 uppercase">
                  WORKING HOURS
                </h3>
                <div className="text-white/80 text-sm leading-relaxed">
                  <p>Sun until Thurs: 4:00PM</p>
                  <p>Fri & Sat: 2:30PM</p>
                  <p className="mt-3">Gates Close at:</p>
                  <p>Sat until Wed: 12:00AM</p>
                  <p>Thu & Fri: 12:30AM</p>
                </div>
              </div>

              {/* Guest Service */}
              <div>
                <h3 className="text-yellow-400 text-sm font-medium tracking-widest mb-4 uppercase">
                  GUEST SERVICE CALL
                </h3>
                <div className="text-white/80 text-sm leading-relaxed">
                  <p>cc@thegroves-sa.com</p>
                  <p>920001672</p>
                  <p className="mt-3">+966556631309</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - App Download */}
          <div className="flex flex-col justify-center items-start lg:items-end">
            <div className="text-right">
              <h3 className="text-yellow-400 text-sm font-medium tracking-widest mb-6 uppercase">
                DOWNLOAD THE GROVES APP
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-block">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on App Store" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="flex items-center mb-6 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=40&fit=crop" 
                alt="The Groves" 
                className="h-10 w-auto mr-8"
              />
              <div className="text-white/60 text-sm">
                <a href="#" className="hover:text-white transition-colors mr-6">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors mr-6">Privacy Policy</a>
                <span>©2023 The Groves for Entertainment</span>
              </div>
            </div>

            {/* Social Icons and Payment */}
            <div className="flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                  </svg>
                </a>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;