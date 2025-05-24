import { ReactNode } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Chatbot from '@/components/chat/chatbot';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-gray text-warm-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
