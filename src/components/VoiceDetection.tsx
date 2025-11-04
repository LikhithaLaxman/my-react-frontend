import { motion } from "motion/react";
import { Brain, Radio, Shield, TrendingUp } from "lucide-react";
import { Progress } from "./ui/progress";

interface VoiceDetectionProps {
  isActive: boolean;
  confidence: number;
}

export function VoiceDetection({ isActive, confidence }: VoiceDetectionProps) {
  const stages = [
    { icon: Shield, label: "Voice Encrypted", delay: 0 },
    { icon: Radio, label: "Feature Extraction (MFCCs)", delay: 0.5 },
    { icon: Brain, label: "Voiceprint Comparison", delay: 1 },
    { icon: TrendingUp, label: `AI Confidence = ${confidence}% (Synthetic)`, delay: 1.5 },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950/50 to-gray-900/50 rounded-xl border-2 border-purple-500/30 p-6 relative overflow-hidden">
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            animate={
              isActive
                ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-16 h-16 text-purple-400" />
          </motion.div>
        </div>

        <h3 className="text-center mb-6 text-purple-300 tracking-wide">
          AI Synthetic Voice Detection Engine (Librosa)
        </h3>

        {/* Waveform visualization */}
        {isActive && (
          <div className="mb-6 h-20 flex items-center justify-center gap-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
                animate={{
                  height: ["20%", `${Math.random() * 80 + 20}%`, "20%"],
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>
        )}

        {/* Sequential stages */}
        <div className="space-y-4">
          {stages.map((Stage, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -20 }}
              transition={{ delay: Stage.delay }}
            >
              <Stage.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm flex-1">{Stage.label}</span>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: Stage.delay + 0.3 }}
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{
                    boxShadow: "0 0 10px rgba(74, 222, 128, 0.8)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Confidence meter */}
        {isActive && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Detection Confidence</span>
              <span className="text-lg text-red-400">{confidence}%</span>
            </div>
            <Progress value={confidence} className="h-3" />
            <div className="text-xs text-center mt-2 text-red-400">
              ⚠️ Synthetic Voice Pattern Detected
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}