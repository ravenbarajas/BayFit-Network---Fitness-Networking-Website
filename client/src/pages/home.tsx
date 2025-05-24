import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ComingSoonBadge } from '@/components/ui/coming-soon-badge';
import { Brain, Video, Heart, Apple, Star, Check, ChevronDown } from 'lucide-react';
import { features, plans, testimonials } from '@/lib/mock-data';

export default function Home() {
  const iconMap = {
    brain: Brain,
    video: Video,
    heartbeat: Heart,
    'apple-alt': Apple
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-gray via-gray-800 to-dark-gray">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/10 to-neon-blue/10"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-electric-teal/20 rounded-full blur-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -right-10 w-60 h-60 bg-neon-blue/20 rounded-full blur-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div
            className="absolute -bottom-10 left-1/3 w-32 h-32 bg-electric-teal/30 rounded-full blur-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-6">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-electric-teal to-neon-blue bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-warm-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of fitness with AI-powered coaching, personalized workouts, and a community that pushes you to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                  Start Your Journey
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-electric-teal text-electric-teal px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:bg-electric-teal hover:text-dark-gray transition-all duration-300 w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-electric-teal text-2xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-poppins font-bold mb-6">
              Why Choose <span className="text-electric-teal">BayFit</span>?
            </h2>
            <p className="text-xl text-warm-white/80 max-w-3xl mx-auto">
              Cutting-edge technology meets personalized fitness to deliver results like never before.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-electric-teal/50 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-teal to-neon-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-dark-gray text-2xl" />
                      </div>
                      <h3 className="text-xl font-poppins font-semibold mb-4">{feature.title}</h3>
                      <p className="text-warm-white/70 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      {feature.comingSoon && (
                        <ComingSoonBadge />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-poppins font-bold mb-6">
              Choose Your <span className="text-electric-teal">Plan</span>
            </h2>
            <p className="text-xl text-warm-white/80 max-w-3xl mx-auto">
              From basic workouts to premium AI coaching, find the perfect plan for your fitness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(plans).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className={`h-full ${
                  plan.popular
                    ? 'bg-gradient-to-br from-electric-teal/10 to-neon-blue/10 border-2 border-electric-teal'
                    : 'bg-gray-800/50 backdrop-blur-sm border-gray-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-electric-teal text-dark-gray px-4 py-2">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-poppins font-bold mb-2">{plan.name}</h3>
                    <p className="text-warm-white/70 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-poppins font-bold">${plan.monthlyPrice}</span>
                      <span className="text-warm-white/70">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="text-electric-teal mr-3 h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/signup">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? 'bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray hover:scale-105'
                            : 'bg-gray-700 text-warm-white hover:bg-gray-600'
                        } transition-all duration-300`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/plans">
              <Button variant="link" className="text-electric-teal hover:text-neon-blue font-semibold text-lg">
                View Detailed Comparison →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-poppins font-bold mb-6">
              What Our <span className="text-electric-teal">Members</span> Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-electric-teal to-neon-blue rounded-full flex items-center justify-center mr-4">
                        <span className="text-dark-gray font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-warm-white/70 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-warm-white/80 italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex text-electric-teal">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
