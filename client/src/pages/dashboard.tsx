import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/use-auth';
import { ComingSoonBadge } from '@/components/ui/coming-soon-badge';
import { LogOut, Play, TrendingUp, Calendar, Settings } from 'lucide-react';
import { dashboardStats, todaysWorkout } from '@/lib/mock-data';

export default function Dashboard() {
  const { isLoggedIn, user, logout } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      setLocation('/login');
    }
  }, [isLoggedIn, setLocation]);

  if (!isLoggedIn || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-poppins font-bold mb-2">
              Welcome back, <span className="text-electric-teal">{user.name}</span>! 👋
            </h1>
            <p className="text-warm-white/70">Ready to crush your fitness goals today?</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="mt-4 sm:mt-0 border-gray-700 text-warm-white hover:bg-gray-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </motion.div>

        {/* Dashboard Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Today's Workout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-electric-teal/10 to-neon-blue/10 border-electric-teal/30 h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-poppins font-bold">Today's Workout</CardTitle>
                  <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30">
                    Scheduled
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-18 bg-gradient-to-br from-electric-teal/20 to-neon-blue/20 rounded-xl flex items-center justify-center">
                    <Play className="h-8 w-8 text-electric-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{todaysWorkout.title}</h3>
                    <p className="text-warm-white/70 mb-3">{todaysWorkout.description}</p>
                    <Button className="bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105 transition-transform duration-300">
                      Start Workout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold">This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Workouts</span>
                    <span className="text-electric-teal font-semibold">{dashboardStats.workoutsThisWeek}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Minutes</span>
                    <span className="text-electric-teal font-semibold">{dashboardStats.minutesThisWeek}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Calories</span>
                    <span className="text-electric-teal font-semibold">{dashboardStats.caloriesThisWeek.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Streak</span>
                    <span className="text-electric-teal font-semibold">{dashboardStats.streak}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-700/50 rounded-xl p-6 text-center h-48 flex flex-col items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-electric-teal mb-4" />
                  <p className="text-warm-white/70">
                    Chart component will display workout frequency, weight progress, and performance metrics
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* My Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-bold flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  My Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Current Plan</span>
                    <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30 capitalize">
                      {user.plan}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Next Billing</span>
                    <span className="text-warm-white">{user.nextBilling}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white/70">Features Used</span>
                    <span className="text-warm-white">{user.featuresUsed}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-warm-white hover:bg-gray-700 mt-4"
                  >
                    Manage Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Smart Coach Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-electric-teal/20 to-neon-blue/20 border border-electric-teal/30 rounded-2xl p-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-electric-teal to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-dark-gray text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-4">AI Smart Coach</h3>
            <p className="text-warm-white/80 mb-6 leading-relaxed">
              Your personalized AI fitness coach is coming soon! Get ready for intelligent workout recommendations, 
              real-time form corrections, and adaptive training plans that evolve with your progress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ComingSoonBadge />
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                Elite Plan Feature
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
