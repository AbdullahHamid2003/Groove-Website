import React from 'react';
import AppStore from '../assets/AppStore.svg';
import PlayStore from '../assets/PlayStore.svg';
import Logo from '../assets/Logo.png';
import TikTok from '../assets/tiktok.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/threads.svg';
import Snapchat from '../assets/snapchat.svg';
import Visa from '../assets/visa.svg';
import Mastercard from '../assets/mastercard.png';
import AmericalExpress from '../assets/AmericalExpress.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#273506] to-[#161F02] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-light leading-snug max-w-xl">
              Join us for an unforgettable experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {/* Location */}
              <div>
                <h3 className="text-xs tracking-widest font-semibold mb-4">LOCATION</h3>
                <p className="text-sm leading-relaxed opacity-90">Al-Hizam Park</p>
                <p className="text-sm leading-relaxed opacity-90">Al-Semairi, Yanbu Al Bahr 46455</p>
                <p className="text-sm leading-relaxed opacity-90">Riyadh Saudi Arabia</p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-xs tracking-widest font-semibold mb-4">WORKING HOURS</h3>
                <p className="text-sm opacity-90">Sun until Thurs: 4:00PM</p>
                <p className="text-sm opacity-90">Fri & Sat: 2:30PM</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">Gates Close at:</p>
                  <p className="text-sm opacity-90">Sat until Wed: 12:00AM</p>
                  <p className="text-sm opacity-90">Thu & Fri: 12:30AM</p>
                </div>
              </div>

              {/* Guest Service */}
              <div>
                <h3 className="text-xs tracking-widest font-semibold mb-4">GUEST SERVICE CALL</h3>
                <p className="text-sm opacity-90">cc@thegroves-sa.com</p>
                <p className="text-sm opacity-90">920001672</p>
                <p className="text-sm opacity-90">+966556631309</p>
              </div>
            </div>
          </div>

          {/* Right Content (App Download) */}
          <div className="lg:w-72">
            <h3 className="text-xs tracking-widest font-semibold mb-4">DOWNLOAD THE GROVES APP</h3>
            <div className="flex sm:flex-row lg:flex gap-4">
              <img src={AppStore} alt="Download on App Store" className="w-40 cursor-pointer" />
              <img src={PlayStore} alt="Get it on Google Play" className="w-40 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Logo + Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between my-8">
          {/* Logo */}
          <img src={Logo} alt="The Groves" className="h-12 md:h-14 mb-5 lg:mb-0" />

          {/* Social Icons */}
          <div className="flex gap-5">
            <img src={TikTok} alt="TikTok" className="h-5 w-5 cursor-pointer" />
            <img src={Instagram} alt="Instagram" className="h-5 w-5 cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="h-5 w-5 cursor-pointer" />
            <img src={Snapchat} alt="Snapchat" className="h-5 w-5 cursor-pointer" />
          </div>
        </div>


        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm opacity-90">
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-center lg:text-left">
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <p>©2023 The Groves for Entertainment</p>
          </div>

          {/* Payment Methods */}
          <div className="flex gap-4">
            <img src={Visa} alt="Visa" className="h-5" />
            <img src={Mastercard} alt="Mastercard" className="h-5" />
            <img src={AmericalExpress} alt="Mastercard" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
