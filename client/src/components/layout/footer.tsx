import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-poppins font-bold text-electric-teal mb-4">
              BayFit <span className="text-warm-white">Network</span>
            </div>
            <p className="text-warm-white/70 mb-4">
              Transform your fitness journey with AI-powered coaching and personalized workouts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-white/70 hover:text-electric-teal transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-warm-white/70 hover:text-electric-teal transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-warm-white/70 hover:text-electric-teal transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-warm-white/70 hover:text-electric-teal transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-warm-white/70">
              <li><Link href="/" className="hover:text-electric-teal transition-colors duration-300">Features</Link></li>
              <li><Link href="/plans" className="hover:text-electric-teal transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/virtual-classes" className="hover:text-electric-teal transition-colors duration-300">Virtual Classes</Link></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">AI Coach</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-warm-white/70">
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-warm-white/70">
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-warm-white/70">
          <p>&copy; 2024 BayFit Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
