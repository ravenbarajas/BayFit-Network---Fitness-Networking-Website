# BayFit Network

BayFit Network is a comprehensive fitness platform designed to connect fitness enthusiasts with personalized workout plans, virtual classes, and fitness tracking tools.

## Features

### User Management
- **User Registration & Authentication**: Secure signup and login functionality
- **User Profiles**: Personalized user dashboards for tracking fitness progress

### Fitness Programs
- **Personalized Workout Plans**: Access to customized fitness programs tailored to individual goals
- **Plan Selection**: Browse and subscribe to various fitness plans
- **Progress Tracking**: Monitor workout achievements and fitness milestones

### Virtual Fitness
- **Live Virtual Classes**: Join live-streamed workout sessions with professional trainers
- **Class Scheduling**: Book and manage virtual fitness class appointments
- **Interactive Workouts**: Engage in interactive workout sessions remotely

### Educational Resources
- **How It Works**: Detailed guides explaining the platform's features and benefits
- **Fitness Resources**: Access to educational content related to fitness and wellness

### Technical Details
- **Frontend**: React with TailwindCSS, shadcn/ui components, and Framer Motion animations
- **Backend**: Express.js API server with PostgreSQL database (using Drizzle ORM)
- **Authentication**: Secure user authentication system
- **Responsive Design**: Mobile-friendly interface that works across all devices

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- PostgreSQL database

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (see `.env.example`)
4. Run database migrations:
   ```
   npm run db:push
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Production Build
```
npm run build
npm start
```

## Technologies Used
- React
- Express.js
- TailwindCSS
- Drizzle ORM
- PostgreSQL
- TypeScript 