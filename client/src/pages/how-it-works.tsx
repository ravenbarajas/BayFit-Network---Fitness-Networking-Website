import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, CreditCard, Dumbbell, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your account in minutes. Tell us about your fitness goals, current level, and preferences to get personalized recommendations.',
      icon: UserPlus
    },
    {
      number: 2,
      title: 'Choose Your Plan',
      description: 'Select the perfect plan for your needs. From basic workouts to premium AI coaching, we have options for every fitness enthusiast.',
      icon: CreditCard
    },
    {
      number: 3,
      title: 'Train Anywhere',
      description: 'Access thousands of workouts, join live classes, or follow personalized plans. Train at home, in the gym, or anywhere life takes you.',
      icon: Dumbbell
    },
    {
      number: 4,
      title: 'Track Progress',
      description: 'Monitor your achievements, celebrate milestones, and get insights to optimize your fitness journey with detailed analytics and progress tracking.',
      icon: TrendingUp
    }
  ];

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
            How <span className="text-electric-teal">BayFit</span> Works
          </h1>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto">
            Your fitness journey simplified in four easy steps. Get started today and transform your life.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-teal to-neon-blue rounded-full hidden lg:block"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center mb-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0 text-center ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-poppins font-bold mb-4 text-electric-teal">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-warm-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Icon */}
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center z-10 lg:mx-8 mb-8 lg:mb-0">
                  <IconComponent className="text-dark-gray text-xl lg:text-2xl" />
                </div>

                {/* Image Placeholder */}
                <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="bg-gray-700/50 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <IconComponent className="h-16 w-16 text-electric-teal mx-auto mb-4" />
                      <p className="text-warm-white/70">Step {step.number} Visual</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/plans">
            <Button className="bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray px-8 py-4 rounded-xl font-poppins font-semibold text-lg hover:scale-105 transition-transform duration-300">
              See Plans & Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
