import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

interface RiskMeterProps {
  score: number;
}

export function RiskMeter({ score }: RiskMeterProps) {
  const getRiskLevel = (score: number) => {
    if (score < 30) return { text: 'Low Risk', color: 'text-green-400' };
    if (score < 70) return { text: 'Moderate Risk', color: 'text-orange-400' };
    return { text: 'High Risk', color: 'text-red-400' };
  };

  const getGradientColor = (score: number) => {
    if (score < 30) return 'from-green-500 to-green-400';
    if (score < 70) return 'from-yellow-500 via-orange-500 to-orange-400';
    return 'from-orange-500 via-red-500 to-red-600';
  };

  const riskLevel = getRiskLevel(score);

  return (
    <div className="pt-4 border-t border-white/10 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/80">Network Trust Score</span>
        </div>
        <div className="text-right">
          <p className="text-2xl text-white">{score}</p>
          <p className={`text-xs ${riskLevel.color}`}>{riskLevel.text}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-black/60 rounded-full overflow-hidden border border-white/10">
        <motion.div
          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getGradientColor(score)}`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Animated glow */}
        {score > 0 && (
          <motion.div
            className={`absolute left-0 top-0 h-full w-8 bg-gradient-to-r ${getGradientColor(score)} blur-md`}
            animate={{
              left: [`${Math.max(0, score - 8)}%`, `${score}%`],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>

      {/* Scale markers */}
      <div className="flex justify-between text-xs text-white/40">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
}