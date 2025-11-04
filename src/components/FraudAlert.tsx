import { motion } from 'motion/react';
import { ShieldAlert, PhoneOff, CheckCircle } from 'lucide-react';

export function FraudAlert() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-red-600/20 to-red-500/20 border-2 border-red-500 rounded-2xl p-6 mb-8"
    >
      {/* Main Alert */}
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <ShieldAlert className="w-12 h-12 text-red-400" />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-2xl text-white mb-2">
            🚨 Call Disconnected — AI Voice Fraud Detected
          </h3>
          <p className="text-red-200 mb-4">
            Fair Dinkum terminated this call to prevent a vishing attempt.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-4">
              <PhoneOff className="w-6 h-6 text-red-400 mb-2" />
              <p className="text-sm text-white/80">Call Terminated</p>
              <p className="text-xs text-white/60 mt-1">Automatically blocked by AI</p>
            </div>
            
            <div className="bg-black/40 border border-red-500/30 rounded-lg p-4">
              <ShieldAlert className="w-6 h-6 text-red-400 mb-2" />
              <p className="text-sm text-white/80">Synthetic Voice: 84%</p>
              <p className="text-xs text-white/60 mt-1">High probability detected</p>
            </div>
            
            <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-sm text-white/80">User Protected</p>
              <p className="text-xs text-white/60 mt-1">No data compromised</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Secured By */}
      <div className="pt-4 border-t border-red-500/30">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#742C9F] to-[#00C8D7] rounded-lg flex items-center justify-center">
              <span className="text-sm">T</span>
            </div>
            <span className="text-sm text-white/70">Telstra Network</span>
          </div>
          
          <div className="w-px h-6 bg-white/20" />
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-xs">📡</span>
            </div>
            <span className="text-sm text-white/70">CAMARA APIs</span>
          </div>
          
          <div className="w-px h-6 bg-white/20" />
          
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[#00C8D7]" />
            <span className="text-sm text-white/70">Fair Dinkum Protection</span>
          </div>
        </div>
        
        <p className="text-center text-xs text-white/40 mt-4">
          Secured by Telstra Network and CAMARA Sandbox APIs
        </p>
      </div>
    </motion.div>
  );
}