import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone, Shield, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          setTimeout(() => {
            checkUserRole(session.user.id);
          }, 0);
        } else {
          setUserRole(null);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setTimeout(() => {
          checkUserRole(session.user.id);
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUserRole = async (userId: string) => {
    try {
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      const adminOrStaff = roles?.find(r => r.role === 'admin' || r.role === 'staff');
      setUserRole(adminOrStaff?.role || null);
    } catch (error) {
      console.error('Error checking user role:', error);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-secondary/50 backdrop-blur-md border-b border-primary/30">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/e1c6537c-db4e-49de-96c8-039971d1e6f9.png" 
                alt="Benextech Logo" 
                className="w-24 h-12 object-contain"
                width="96"
                height="48"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                      isActivePath(link.path) 
                        ? "text-primary" 
                        : "text-white"
                    }`}
                >
                  {link.name}
                  {isActivePath(link.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Contact Actions & Auth */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-2">
                  {userRole && (userRole === 'admin' || userRole === 'staff') && (
                    <Button size="sm" variant="outline" asChild className="border-glow">
                      <Link to="/admin">
                        <Shield className="w-4 h-4 mr-2" />
                        Admin
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={() => supabase.auth.signOut()}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button size="sm" variant="outline" asChild className="border-glow">
                  <Link to="/auth">Sign In</Link>
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                className="btn-glow border-glow"
                asChild
              >
                <a href="tel:07036399365">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                className="btn-glow bg-primary hover:bg-primary/90"
                size="sm"
                asChild
              >
                <a 
                  href="https://wa.me/2349074839789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary/30">
              <div className="flex flex-col space-y-3 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                      isActivePath(link.path) 
                        ? "text-primary" 
                        : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Auth */}
                {user ? (
                  <div className="flex flex-col space-y-2 pt-3">
                    {userRole && (userRole === 'admin' || userRole === 'staff') && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-glow border-glow w-full"
                        asChild
                      >
                        <Link to="/admin">
                          <Shield className="w-4 h-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => supabase.auth.signOut()}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-glow border-glow w-full"
                    asChild
                  >
                    <Link to="/auth">Sign In</Link>
                  </Button>
                )}
                
                <div className="flex flex-col space-y-2 pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-glow border-glow w-full"
                    asChild
                  >
                    <a href="tel:07036399365">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    className="btn-glow bg-primary hover:bg-primary/90 w-full"
                    size="sm"
                    asChild
                  >
                    <a 
                      href="https://wa.me/2349074839789" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-primary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/e1c6537c-db4e-49de-96c8-039971d1e6f9.png" 
                  alt="Benextech Logo" 
                  className="w-48 h-48 object-contain"
                  width="192"
                  height="192"
                  loading="lazy"
                />
              </div>
              <p className="text-black text-sm">
                Your one-stop hub for fixing Apple & Android devices, PCs, Smart TVs, and solar systems.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-black hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Services</h4>
              <div className="flex flex-col space-y-2 text-sm text-black">
                <span>Device Repairs</span>
                <span>Solar Installation</span>
                <span>Data Recovery</span>
                <span>Software Setup</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Contact</h4>
              <div className="flex flex-col space-y-2 text-sm text-black">
                <span>07036399365</span>
                <span>08169711467</span>
                <a 
                  href="mailto:benextech@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  benextech@gmail.com
                </a>
                <a 
                  href="https://wa.me/2349074839789" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Chat
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/30 text-center text-sm text-black">
            <p>&copy; 2024 Benextech. All rights reserved. Built with expert hands, advanced tools, and trusted support.</p>
            <p className="mt-2">CAC Registration: BENEXTECH CONNECT SYSTEMS - RC: 8661250</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;