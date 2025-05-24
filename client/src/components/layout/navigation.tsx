import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isLoggedIn, logout } = useAuth();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/plans', label: 'Plans' },
    { href: '/virtual-classes', label: 'Virtual Classes' },
    ...(isLoggedIn ? [{ href: '/dashboard', label: 'Dashboard' }] : [])
  ];

  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-gray/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-poppins font-bold text-electric-teal">
              BayFit <span className="text-warm-white">Network</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-electric-teal'
                      : 'text-warm-white hover:text-electric-teal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button
                onClick={logout}
                variant="outline"
                className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-dark-gray"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-warm-white hover:text-electric-teal"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105 transition-transform duration-300">
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-white hover:text-electric-teal"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? 'text-electric-teal'
                    : 'text-warm-white hover:text-electric-teal'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-700 pt-4">
              {isLoggedIn ? (
                <Button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-dark-gray"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full text-warm-white justify-start px-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      className="w-full mt-2 bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join Now
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
