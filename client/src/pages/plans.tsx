import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X } from 'lucide-react';
import { ComingSoonBadge } from '@/components/ui/coming-soon-badge';
import { plans } from '@/lib/mock-data';

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    { name: 'Workout Library', core: '500+', pro: '1000+', elite: '2000+' },
    { name: 'Live Classes', core: false, pro: true, elite: true },
    { name: 'AI Smart Coach', core: false, pro: false, elite: true },
    { name: '1-on-1 Sessions', core: false, pro: false, elite: 'Monthly' },
    { name: 'Support Level', core: 'Email', pro: 'Priority Chat', elite: '24/7 Priority' }
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
            Choose Your <span className="text-electric-teal">Plan</span>
          </h1>
          <p className="text-xl text-warm-white/80 max-w-3xl mx-auto mb-8">
            Flexible pricing options to fit your fitness goals and budget. All plans include our core features with premium additions.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`${!isYearly ? 'text-warm-white' : 'text-warm-white/70'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-electric-teal"
            />
            <span className={`${isYearly ? 'text-electric-teal' : 'text-warm-white/70'}`}>Yearly</span>
            <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30">
              Save 20%
            </Badge>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(plans).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
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
                  <div className="mb-8">
                    <span className="text-4xl font-poppins font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-warm-white/70">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-electric-teal mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                        <span className="text-sm">
                          {feature}
                          {feature.includes('AI Smart Coach') && (
                            <ComingSoonBadge />
                          )}
                        </span>
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-800/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-poppins font-bold text-center mb-8">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">Core</th>
                  <th className="text-center py-4 px-6 font-semibold text-electric-teal">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold">Elite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className="border-b border-gray-800">
                    <td className="py-4 px-6">{feature.name}</td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.core === 'boolean' ? (
                        feature.core ? (
                          <Check className="h-5 w-5 text-electric-teal mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        feature.core
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 text-electric-teal mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        feature.pro
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof feature.elite === 'boolean' ? (
                        feature.elite ? (
                          <Check className="h-5 w-5 text-electric-teal mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        feature.elite
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
