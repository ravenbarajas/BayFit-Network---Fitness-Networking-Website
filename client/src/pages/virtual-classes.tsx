import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Play } from 'lucide-react';
import { ComingSoonBadge } from '@/components/ui/coming-soon-badge';
import { virtualClasses } from '@/lib/mock-data';

export default function VirtualClasses() {
  const [activeFilter, setActiveFilter] = useState<'live' | 'ondemand'>('live');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30">Live</Badge>;
      case 'upcoming':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Live in 2h</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Available</Badge>;
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-5xl font-poppins font-bold mb-6">
            Virtual <span className="text-electric-teal">Classes</span>
          </h1>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto">
            Join live classes or access our on-demand library. World-class instructors, anytime, anywhere.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-xl p-1 flex">
            <Button
              variant={activeFilter === 'live' ? 'default' : 'ghost'}
              onClick={() => setActiveFilter('live')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'live'
                  ? 'bg-electric-teal text-dark-gray'
                  : 'text-warm-white hover:text-electric-teal'
              }`}
            >
              Live Classes
            </Button>
            <Button
              variant={activeFilter === 'ondemand' ? 'default' : 'ghost'}
              onClick={() => setActiveFilter('ondemand')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'ondemand'
                  ? 'bg-electric-teal text-dark-gray'
                  : 'text-warm-white hover:text-electric-teal'
              }`}
            >
              On-Demand
            </Button>
          </div>
        </div>

        {/* Classes Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {virtualClasses.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden hover:border-electric-teal/50 transition-all duration-300">
                {/* Class Image */}
                <div className="relative h-48 bg-gradient-to-br from-electric-teal/20 to-neon-blue/20 flex items-center justify-center">
                  <Play className="h-12 w-12 text-electric-teal" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    {getStatusBadge(classItem.status)}
                    <div className="flex items-center text-warm-white/70 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{classItem.duration} min</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                  <p className="text-warm-white/70 mb-4">with {classItem.instructor}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-electric-teal font-semibold">{classItem.time}</span>
                    <Button
                      className={`${
                        classItem.status === 'live'
                          ? 'bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105'
                          : 'bg-gray-700 text-warm-white hover:bg-gray-600'
                      } transition-all duration-300`}
                    >
                      {classItem.status === 'live' ? 'Join Class' : 'Set Reminder'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-electric-teal/20 to-neon-blue/20 border border-electric-teal/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-poppins font-bold mb-4">More Virtual Features Coming Soon!</h3>
          <p className="text-warm-white/80 mb-6">
            We're working on exciting new features including VR workouts, real-time form correction, and interactive group challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ComingSoonBadge />
            <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">VR Workouts</Badge>
            <ComingSoonBadge />
            <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30">Form Analysis</Badge>
            <ComingSoonBadge />
            <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">Group Challenges</Badge>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
