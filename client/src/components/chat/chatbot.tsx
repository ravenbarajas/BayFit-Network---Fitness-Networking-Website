import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    {
      id: 1,
      text: "Hi there! I'm BayBot — your AI fitness coach. 🤖",
      isBot: true
    },
    {
      id: 2,
      text: "I'm coming soon to help with workouts, nutrition plans, and answering all your fitness questions!",
      isBot: true
    },
    {
      id: 3,
      text: "For now, feel free to explore the platform and check out our amazing features. 💪",
      isBot: true
    }
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-electric-teal to-neon-blue text-dark-gray shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 z-50"
          >
            <Card className="bg-gray-800 border-gray-700 shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center">
                    <span className="text-dark-gray font-bold">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-white">BayBot</h3>
                    <p className="text-sm text-warm-white/70">AI Fitness Assistant</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-warm-white/70 hover:text-warm-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-2xl text-sm ${
                          message.isBot
                            ? 'bg-gray-700 text-warm-white rounded-bl-none'
                            : 'bg-electric-teal text-dark-gray rounded-br-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Type your message..."
                      className="bg-gray-700 border-gray-600 text-warm-white placeholder:text-warm-white/50"
                      disabled
                    />
                    <Button
                      size="icon"
                      className="bg-gray-600 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-warm-white/50 mt-2 text-center">
                    Chat functionality coming soon in our Elite plan!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
