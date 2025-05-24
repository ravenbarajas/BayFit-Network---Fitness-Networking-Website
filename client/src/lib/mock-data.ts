export const plans = {
  core: {
    name: 'Core',
    description: 'Perfect for getting started',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      'Access to 500+ workout videos',
      'Basic progress tracking',
      'Community forum access',
      'Mobile app access',
      'Email support'
    ]
  },
  pro: {
    name: 'Pro',
    description: 'For serious fitness enthusiasts',
    monthlyPrice: 39,
    yearlyPrice: 31,
    features: [
      'Everything in Core',
      'Live virtual classes',
      'Advanced nutrition tracking',
      'Wearable device integration',
      'Custom workout plans',
      'Priority chat support'
    ],
    popular: true
  },
  elite: {
    name: 'Elite',
    description: 'Ultimate fitness experience',
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      'Everything in Pro',
      'AI Smart Coach',
      '1-on-1 virtual training sessions',
      'Personalized meal planning',
      'Advanced analytics & insights',
      '24/7 priority support'
    ]
  }
};

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    quote: 'BayFit has completely transformed my approach to fitness. The personalized workouts and virtual classes keep me motivated every single day!',
    rating: 5
  },
  {
    name: 'Mike Chen',
    role: 'Software Engineer',
    quote: 'The AI coaching feature is incredible. It\'s like having a personal trainer who knows exactly what I need to improve my performance.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Yoga Instructor',
    quote: 'The community aspect is amazing. I\'ve connected with like-minded fitness enthusiasts who keep me accountable and motivated.',
    rating: 5
  }
];

export const virtualClasses = [
  {
    id: '1',
    title: 'Morning Flow Yoga',
    instructor: 'Sarah Chen',
    duration: 45,
    time: '9:00 AM PST',
    status: 'live' as const,
    type: 'yoga' as const
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    instructor: 'Mike Rodriguez',
    duration: 30,
    time: '12:00 PM PST',
    status: 'upcoming' as const,
    type: 'hiit' as const
  },
  {
    id: '3',
    title: 'Strength & Conditioning',
    instructor: 'Emma Thompson',
    duration: 60,
    time: '6:00 PM PST',
    status: 'live' as const,
    type: 'strength' as const
  }
];

export const features = [
  {
    icon: 'brain',
    title: 'AI Smart Coach',
    description: 'Personalized workout plans powered by machine learning that adapt to your progress and goals.',
    comingSoon: true
  },
  {
    icon: 'video',
    title: 'Virtual Classes',
    description: 'Join live and on-demand classes with world-class instructors from anywhere in the world.',
    comingSoon: false
  },
  {
    icon: 'heartbeat',
    title: 'Wearable Sync',
    description: 'Seamlessly connect your fitness trackers and smartwatches for comprehensive health monitoring.',
    comingSoon: true
  },
  {
    icon: 'apple-alt',
    title: 'Nutrition Assistant',
    description: 'AI-powered meal planning and nutrition tracking to complement your fitness journey perfectly.',
    comingSoon: true
  }
];

export const dashboardStats = {
  workoutsThisWeek: '4/5',
  minutesThisWeek: 180,
  caloriesThisWeek: 1250,
  streak: '7 days'
};

export const todaysWorkout = {
  title: 'Upper Body Strength',
  description: '45 minutes • Intermediate • Dumbbells required',
  status: 'scheduled' as const
};
