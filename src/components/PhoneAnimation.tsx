import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneCall, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";

interface PhoneAnimationProps {
  isRinging: boolean;
  phoneNumber: string;
  showAlert: boolean;
}

export function PhoneAnimation({ isRinging, phoneNumber, showAlert }: PhoneAnimationProps) {
  return (
    <div className="space-y-4">
      {/* Phone visualization */}
      <div className="relative flex justify-center">
        <motion.div
          className="relative"
          animate={
            isRinging
              ? {
                  rotate: [-5, 5, -5, 5, 0],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            repeat: isRinging ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        >
          <div className="w-40 h-72 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border-4 border-gray-700 relative overflow-hidden shadow-2xl">
            {/* Phone screen */}
            <div className="absolute inset-4 bg-gradient-to-b from-gray-900 to-black rounded-2xl">
              {isRinging && (
                <>
                  {/* Incoming call UI */}
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <PhoneCall className="w-16 h-16 text-green-400 mb-4" />
                    </motion.div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Incoming Call</div>
                      <div className="text-sm text-white">{phoneNumber}</div>
                    </div>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{
                        scale: [0, 2, 3],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-20 h-20 rounded-full border-2 border-green-400" />
                    </motion.div>
                  </div>
                </>
              )}
            </div>

            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl" />
          </div>

          {/* Glowing effect when ringing */}
          {isRinging && (
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(74, 222, 128, 0.3)",
                  "0 0 40px rgba(74, 222, 128, 0.6)",
                  "0 0 20px rgba(74, 222, 128, 0.3)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* SMS Alert notification */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Card className="bg-gradient-to-r from-red-950/50 to-orange-950/50 border-2 border-red-500 p-4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-red-500/10"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-red-300 mb-1">
                      ⚠️ High Risk Detected
                    </div>
                    <div className="text-xs text-gray-300">
                      Possible Vishing Attempt
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      From: {phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call incoming text bubble */}
      {isRinging && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block bg-gray-800 rounded-lg px-4 py-2 border border-gray-700">
            <div className="text-sm text-gray-300">
              Incoming call from {phoneNumber}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}