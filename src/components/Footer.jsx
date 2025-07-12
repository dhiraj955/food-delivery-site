import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-600">Dishly</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-[250px]">
              Delivering happiness to your doorstep. Fast, fresh & flavorful.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Company</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-red-500">About Us</a></li>
                <li><a href="#" className="hover:text-red-500">Careers</a></li>
                <li><a href="#" className="hover:text-red-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">Support</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-red-500">Help Center</a></li>
                <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Follow Us</h3>
            <div className="flex gap-4 text-red-600 text-xl">
              <a href="#" className="hover:text-red-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-400"><FaTwitter /></a>
              <a href="#" className="hover:text-red-400"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dishly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
