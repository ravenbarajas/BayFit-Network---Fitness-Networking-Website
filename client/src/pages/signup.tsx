import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/use-auth';
import { mockSignup } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { plans } from '@/lib/mock-data';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'core' | 'pro' | 'elite'>('pro');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast({
        title: "Terms required",
        description: "Please accept the terms of service to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Mock delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = mockSignup(name, email, password, selectedPlan);
      login(user);
      
      toast({
        title: "Welcome to BayFit!",
        description: "Your account has been created successfully.",
      });
      
      setLocation('/dashboard');
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again with different information.",
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
            <CardTitle className="text-2xl font-poppins font-bold">Join BayFit</CardTitle>
            <p className="text-warm-white/70">Start your fitness journey today</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 bg-gray-700 border-gray-600 focus:border-electric-teal"
                  placeholder="John Doe"
                />
              </div>

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

              <div>
                <Label htmlFor="plan" className="text-sm font-medium">Choose Plan</Label>
                <Select value={selectedPlan} onValueChange={(value: 'core' | 'pro' | 'elite') => setSelectedPlan(value)}>
                  <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 focus:border-electric-teal">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {Object.entries(plans).map(([key, plan]) => (
                      <SelectItem key={key} value={key}>
                        {plan.name} - ${plan.monthlyPrice}/month
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-warm-white/70 leading-relaxed">
                  I agree to the{' '}
                  <Button variant="link" className="text-electric-teal hover:text-neon-blue p-0 h-auto">
                    Terms of Service
                  </Button>
                  {' '}and{' '}
                  <Button variant="link" className="text-electric-teal hover:text-neon-blue p-0 h-auto">
                    Privacy Policy
                  </Button>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105 transition-transform duration-300"
              >
                {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Create Account
              </Button>
            </form>

            <p className="text-center text-warm-white/70 mt-6">
              Already have an account?{' '}
              <Link href="/login">
                <Button variant="link" className="text-electric-teal hover:text-neon-blue p-0">
                  Sign in
                </Button>
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
