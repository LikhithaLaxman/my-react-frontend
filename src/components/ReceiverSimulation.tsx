import { motion, AnimatePresence } from 'motion/react';
import { Phone, PhoneIncoming, Shield, ShieldAlert, PhoneOff, XCircle } from 'lucide-react';

interface ReceiverSimulationProps {
  isRinging: boolean;
  callerNumber: string;
  onAnswer: () => void;
  callAnswered: boolean;
  fraudDetected?: boolean;
}

export function ReceiverSimulation({ isRinging, callerNumber, onAnswer, callAnswered, fraudDetected }: ReceiverSimulationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl text-white">Receiver Simulation</h2>
          <p className="text-sm text-white/60">Protected User</p>
        </div>
      </div>

      {/* Call Disconnected State */}
      <AnimatePresence>
        {fraudDetected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 2,
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mb-4 relative"
              >
                <PhoneOff className="w-12 h-12 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-red-400"
                  animate={{
                    scale: [1, 1.5, 1.5],
                    opacity: [0.8, 0, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                <XCircle className="w-4 h-4 text-red-400" />
                <p className="text-sm text-red-300">Call Disconnected</p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <p className="text-white">Protected by Fair Dinkum!</p>
              </div>
              <p className="text-sm text-green-300">
                ✓ AI detected synthetic voice and automatically terminated the vishing call.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default State */}
      {!isRinging && !callAnswered && !fraudDetected && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
            <Phone className="w-10 h-10 text-white/30" />
          </div>
          <p className="text-white/50 text-center">Waiting for incoming call...</p>
        </div>
      )}

      {/* Ringing State */}
      <AnimatePresence>
        {isRinging && !callAnswered && !fraudDetected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-6"
          >
            {/* Phone Animation */}
            <div className="flex flex-col items-center justify-center py-8">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#742C9F] flex items-center justify-center mb-4"
              >
                <PhoneIncoming className="w-12 h-12 text-white" />
                
                {/* Ripple effect */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-[#00C8D7]"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                    }}
                  />
                ))}
              </motion.div>
              
              <p className="text-white text-center mb-2">📞 Incoming Call from</p>
              <p className="text-2xl text-[#00C8D7]">{callerNumber}</p>
            </div>

            {/* Alert Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-300">⚠️ High Risk Detected</p>
                  <p className="text-sm text-red-200/80 mt-1">Potential Vishing Call</p>
                  <p className="text-xs text-red-200/60 mt-2">
                    Fair Dinkum Network Analysis shows suspicious activity.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm">
                  Block Automatically
                </button>
                <button
                  onClick={onAnswer}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm"
                >
                  Answer with Caution
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Answered State */}
      <AnimatePresence>
        {callAnswered && !fraudDetected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4"
              >
                <Phone className="w-12 h-12 text-white" />
              </motion.div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                <motion.div
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                <p className="text-sm text-green-300">Call Connected</p>
              </div>
            </div>

            <div className="bg-[#00C8D7]/10 border border-[#00C8D7]/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#00C8D7]" />
                <p className="text-white">Fair Dinkum Protection Active</p>
              </div>
              <p className="text-sm text-white/60">
                AI Vishing Detection Engine is now analyzing voice patterns...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}