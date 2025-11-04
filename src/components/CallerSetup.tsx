// 

"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Phone, AlertTriangle, RotateCcw } from "lucide-react";

interface CallerSetupProps {
  onStartCall: (number: string) => void;
  callStarted: boolean;
  disabled?: boolean;
  fraudDetected?: boolean;
}

const callerNumbers = [
  { number: "+99999991000", risk: "High Risk - Known Fraud Source" },
  { number: "+99999991001", risk: "Moderate Risk - Suspicious Activity" },
  { number: "+99999990504", risk: "Low Risk - Verified Source" },
];

export function CallerSetup({
  onStartCall,
  callStarted,
  disabled,
}: CallerSetupProps) {
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleStartCall = () => {
    if (selectedNumber) {
      onStartCall(selectedNumber);
    }
  };

  const handleReset = () => {
    // ✅ Fully refresh the browser tab (like pressing F5)
    window.location.reload(true);
  };

  const selectedNumberData = callerNumbers.find(
    (n) => n.number === selectedNumber
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl text-white">Simulate a Call</h2>
          <p className="text-sm text-white/60">Choose Caller Number</p>
        </div>
      </div>

      {/* Caller selection */}
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm text-white/70">Simulated Fraud Source</span>
          <select
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            disabled={disabled}
            className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#00C8D7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select a caller number...</option>
            {callerNumbers.map((caller) => (
              <option key={caller.number} value={caller.number}>
                {caller.number}
              </option>
            ))}
          </select>
        </label>

        {/* Risk Message */}
        {selectedNumberData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex items-start gap-2 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg"
          >
            <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-orange-300">{selectedNumberData.risk}</p>
          </motion.div>
        )}

        {/* Start Call Button */}
        <button
          onClick={handleStartCall}
          disabled={!selectedNumber || disabled}
          className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-700 hover:to-red-600 transition-all flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          <span>Start Call</span>
        </button>

        {/* Connecting message */}
        {callStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#00C8D7]"
              />
              <p className="text-sm text-[#00C8D7]">
                Connecting via Telstra Network...
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Info Box */}
      <div className="pt-4 border-t border-white/10 space-y-2 text-center">
        <p className="text-xs text-white/50">Nokia/Telstra Sandbox Numbers</p>
        <p className="text-xs text-white/40">
          These numbers simulate different risk profiles for demonstration
          purposes.
        </p>

        {/* 🔁 Reset Button */}
       <motion.button
  onClick={handleReset}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="mt-5 w-full px-6 py-3 bg-gradient-to-r from-red-700 to-red-500 text-white text-sm font-semibold rounded-lg border border-red-600 hover:from-red-800 hover:to-red-600 transition-all duration-300"
>
  Reset Simulation
</motion.button>

      </div>
    </motion.div>
  );
}
