import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface HeaderProps {
  onStartDemo: () => void;
}

export function Header({ onStartDemo }: HeaderProps) {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#742C9F] to-[#00C8D7] rounded-xl flex items-center justify-center">
              <span className="text-3xl">T</span>
            </div>
            <div>
              <p className="text-xl text-white/90">Telstra</p>
              <p className="text-sm text-white/60">Network</p>
            </div>
          </div>
          
          <div className="w-px h-16 bg-white/20" />
          
          <div className="flex items-center gap-3">
            <Shield className="w-16 h-16 text-[#00C8D7]" />
            <div>
              <p className="text-3xl bg-gradient-to-r from-[#742C9F] to-[#00C8D7] bg-clip-text text-transparent">
                Fair Dinkum!
              </p>
              <p className="text-sm text-white/60">Protecting Every Call</p>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl text-white">
            AI-Powered Voice Fraud Prevention
          </h1>
          <p className="text-2xl text-white/80">
            Secured by Telstra Network
          </p>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-white/70 max-w-2xl mx-auto"
        >
          Real-time risk assessment and synthetic voice detection for safer telecom communication.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={onStartDemo}
            className="relative px-12 py-4 text-xl bg-gradient-to-r from-[#00C8D7] to-[#742C9F] rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#742C9F] to-[#00C8D7]"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="relative z-10">Start Demo</span>
          </motion.button>
        </motion.div>

        {/* Powered by text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-white/50"
        >
          Powered by Telstra CAMARA APIs & AI Vishing Detection Engine
        </motion.p>
      </div>
    </div>
  );
}