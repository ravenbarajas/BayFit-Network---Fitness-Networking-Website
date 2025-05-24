import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/use-auth';
import { mockLogin } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mock delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = mockLogin(email, password);
      login(user);
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      
      setLocation('/dashboard');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-poppins font-bold">Welcome Back</CardTitle>
            <p className="text-warm-white/70">Sign in to your BayFit account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 focus:border-electric-teal"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 focus:border-electric-teal"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm text-warm-white/70">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="text-electric-teal hover:text-neon-blue p-0">
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105 transition-transform duration-300"
              >
                {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="bg-gray-700" />
              <div className="mt-6 space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-black text-white border-black hover:bg-gray-900"
                >
                  Continue with Apple
                </Button>
              </div>
            </div>

            <p className="text-center text-warm-white/70 mt-6">
              Don't have an account?{' '}
              <Link href="/signup">
                <Button variant="link" className="text-electric-teal hover:text-neon-blue p-0">
                  Sign up
                </Button>
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
