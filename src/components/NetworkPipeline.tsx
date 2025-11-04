// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { CheckCircle2, AlertTriangle, XCircle, Shield, Loader2 } from 'lucide-react';
// import { RiskMeter } from './RiskMeter';

// interface NetworkPipelineProps {
//   isActive: boolean;
//   onComplete: () => void;
//   showInitialScore?: boolean;
// }

// type StageStatus = 'pending' | 'checking' | 'verified' | 'suspicious' | 'alert';

// interface Stage {
//   id: string;
//   name: string;
//   status: StageStatus;
// }

// export function NetworkPipeline({ isActive, onComplete, showInitialScore = false }: NetworkPipelineProps) {
//   const [stages, setStages] = useState<Stage[]>([
//     { id: '1', name: 'Device Status', status: 'pending' },
//     { id: '2', name: 'Number Verification', status: 'pending' },
//     { id: '3', name: 'KYC Match', status: 'pending' },
//     { id: '4', name: 'SIM Swap', status: 'pending' },
//     { id: '5', name: 'Device Swap', status: 'pending' },
//   ]);
  
//   const [riskScore, setRiskScore] = useState(0);

//   useEffect(() => {
//     // Show initial trust score calculation
//     if (showInitialScore) {
//       const initialSequence = [
//         { index: 0, delay: 500, checkTime: 800, status: 'verified', risk: 0 },
//         { index: 1, delay: 1300, checkTime: 800, status: 'verified', risk: 10 },
//         { index: 2, delay: 2100, checkTime: 800, status: 'verified', risk: 15 },
//         { index: 3, delay: 2900, checkTime: 800, status: 'verified', risk: 20 },
//         { index: 4, delay: 3700, checkTime: 800, status: 'verified', risk: 25 },
//       ];

//       initialSequence.forEach(({ index, delay, checkTime, status, risk }) => {
//         setTimeout(() => {
//           setStages(prev => {
//             const updated = [...prev];
//             updated[index] = { ...updated[index], status: 'checking' };
//             return updated;
//           });
//         }, delay);

//         setTimeout(() => {
//           setStages(prev => {
//             const updated = [...prev];
//             updated[index] = { ...updated[index], status: status as StageStatus };
//             return updated;
//           });
//           setRiskScore(risk);
//         }, delay + checkTime);
//       });

//       setTimeout(() => {
//         onComplete();
//       }, 5000);
//       return;
//     }

//     if (!isActive) {
//       setStages([
//         { id: '1', name: 'Device Status', status: 'pending' },
//         { id: '2', name: 'Number Verification', status: 'pending' },
//         { id: '3', name: 'KYC Match', status: 'pending' },
//         { id: '4', name: 'SIM Swap', status: 'pending' },
//         { id: '5', name: 'Device Swap', status: 'pending' },
//       ]);
//       setRiskScore(0);
//       return;
//     }

//     // Simulate API checks
//     const sequence = [
//       { index: 0, delay: 500, checkTime: 1000, status: 'verified', risk: 0 },
//       { index: 1, delay: 1500, checkTime: 1000, status: 'verified', risk: 10 },
//       { index: 2, delay: 2500, checkTime: 1500, status: 'suspicious', risk: 35 },
//       { index: 3, delay: 4000, checkTime: 1500, status: 'alert', risk: 72 },
//       { index: 4, delay: 5500, checkTime: 1000, status: 'verified', risk: 72 },
//     ];

//     sequence.forEach(({ index, delay, checkTime, status, risk }) => {
//       // Start checking
//       setTimeout(() => {
//         setStages(prev => {
//           const updated = [...prev];
//           updated[index] = { ...updated[index], status: 'checking' };
//           return updated;
//         });
//       }, delay);

//       // Complete check
//       setTimeout(() => {
//         setStages(prev => {
//           const updated = [...prev];
//           updated[index] = { ...updated[index], status: status as StageStatus };
//           return updated;
//         });
//         setRiskScore(risk);
//       }, delay + checkTime);
//     });

//     // Complete pipeline
//     setTimeout(() => {
//       onComplete();
//     }, 7000);
//   }, [isActive, onComplete, showInitialScore]);

//   const getStatusIcon = (status: StageStatus) => {
//     switch (status) {
//       case 'checking':
//         return <Loader2 className="w-5 h-5 animate-spin text-[#00C8D7]" />;
//       case 'verified':
//         return <CheckCircle2 className="w-5 h-5 text-green-400" />;
//       case 'suspicious':
//         return <AlertTriangle className="w-5 h-5 text-orange-400" />;
//       case 'alert':
//         return <XCircle className="w-5 h-5 text-red-400" />;
//       default:
//         return <div className="w-5 h-5 rounded-full border-2 border-white/20" />;
//     }
//   };

//   const getStatusColor = (status: StageStatus) => {
//     switch (status) {
//       case 'checking':
//         return 'border-[#00C8D7] bg-[#00C8D7]/10';
//       case 'verified':
//         return 'border-green-400 bg-green-400/10';
//       case 'suspicious':
//         return 'border-orange-400 bg-orange-400/10';
//       case 'alert':
//         return 'border-red-400 bg-red-400/10';
//       default:
//         return 'border-white/10 bg-black/20';
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.1 }}
//       className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6"
//     >
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#742C9F] to-[#00C8D7] flex items-center justify-center">
//           <Shield className="w-5 h-5 text-white" />
//         </div>
//         <div>
//           <h2 className="text-xl text-white">Network Intelligence Check</h2>
//           <p className="text-sm text-white/60">Powered by CAMARA APIs</p>
//         </div>
//       </div>

//       {/* Pipeline Stages */}
//       <div className="space-y-3">
//         {stages.map((stage, index) => (
//           <motion.div
//             key={stage.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className={`relative p-4 rounded-xl border-2 transition-all ${getStatusColor(stage.status)}`}
//           >
//             {stage.status === 'checking' && (
//               <motion.div
//                 className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00C8D7]/20 to-transparent"
//                 animate={{
//                   opacity: [0.3, 0.6, 0.3],
//                 }}
//                 transition={{
//                   duration: 1,
//                   repeat: Infinity,
//                 }}
//               />
//             )}
            
//             <div className="relative flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 {getStatusIcon(stage.status)}
//                 <span className="text-white">{stage.name}</span>
//               </div>
              
//               <AnimatePresence mode="wait">
//                 {stage.status === 'checking' && (
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-xs text-[#00C8D7]"
//                   >
//                     Checking...
//                   </motion.span>
//                 )}
//                 {stage.status === 'verified' && (
//                   <motion.span
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-xs text-green-400"
//                   >
//                     ✓ Verified
//                   </motion.span>
//                 )}
//                 {stage.status === 'suspicious' && (
//                   <motion.span
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-xs text-orange-400"
//                   >
//                     ⚠ Suspicious
//                   </motion.span>
//                 )}
//                 {stage.status === 'alert' && (
//                   <motion.span
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-xs text-red-400"
//                   >
//                     🔴 Alert
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Hover tooltip */}
//             {stage.status !== 'pending' && (
//               <div className="absolute -top-2 -right-2 opacity-0 hover:opacity-100 transition-opacity">
//                 <div className="bg-black/90 border border-white/20 rounded px-2 py-1 text-xs text-white/80 whitespace-nowrap">
//                   API response received ✓
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Risk Meter */}
//       <RiskMeter score={riskScore} />
//     </motion.div>
//   );
// }

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, XCircle, Shield, Loader2 } from 'lucide-react';
import { RiskMeter } from './RiskMeter';

interface NetworkPipelineProps {
  isActive: boolean;
  onComplete: () => void;
  backendData?: {
    checks?: {
      [key: string]: {
        status: string;
        message: string;
      };
    };
    score?: number;
    recommendation?: string;
  };
}

type StageStatus = 'pending' | 'checking' | 'verified' | 'suspicious' | 'alert';

interface Stage {
  id: string;
  name: string;
  status: StageStatus;
}

const stageKeyMap: Record<string, string> = {
  'Device Status': 'device',
  'Number Verification': 'number_verification',
  'KYC Match': 'kyc',
  'SIM Swap': 'sim_swap',
  'Device Swap': 'device_swap',
};

const mapStatus = (s?: string): StageStatus => {
  switch ((s || '').toLowerCase()) {
    case 'success':
      return 'verified';
    case 'failed':
      return 'alert';
    case 'suspicious':
      return 'suspicious';
    default:
      return 'pending';
  }
};

export function NetworkPipeline({ isActive, onComplete, backendData }: NetworkPipelineProps) {
  const [stages, setStages] = useState<Stage[]>([
    { id: '1', name: 'Device Status', status: 'pending' },
    { id: '2', name: 'Number Verification', status: 'pending' },
    { id: '3', name: 'KYC Match', status: 'pending' },
    { id: '4', name: 'SIM Swap', status: 'pending' },
    { id: '5', name: 'Device Swap', status: 'pending' },
  ]);

  const [riskScore, setRiskScore] = useState(0);

  // Update UI when backend data arrives
  useEffect(() => {
    if (!backendData || !isActive) return;

    const checks = backendData.checks || {};
    const updated = stages.map((stage) => {
      const key = stageKeyMap[stage.name];
      const result = checks[key];
      return {
        ...stage,
        status: mapStatus(result?.status),
      };
    });

    setStages(updated);
    setRiskScore(backendData.score || 0);
    onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backendData, isActive]);

  const getStatusIcon = (status: StageStatus) => {
    switch (status) {
      case 'checking':
        return <Loader2 className="w-5 h-5 animate-spin text-[#00C8D7]" />;
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'suspicious':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'alert':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-white/20" />;
    }
  };

  const getStatusColor = (status: StageStatus) => {
    switch (status) {
      case 'checking':
        return 'border-[#00C8D7] bg-[#00C8D7]/10';
      case 'verified':
        return 'border-green-400 bg-green-400/10';
      case 'suspicious':
        return 'border-orange-400 bg-orange-400/10';
      case 'alert':
        return 'border-red-400 bg-red-400/10';
      default:
        return 'border-white/10 bg-black/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#742C9F] to-[#00C8D7] flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl text-white">Network Intelligence Check</h2>
          <p className="text-sm text-white/60">Powered by CAMARA APIs</p>
        </div>
      </div>

      {/* Stages */}
      <div className="space-y-3">
        {stages.map((stage, idx) => {
          const key = stageKeyMap[stage.name];
          const msg = backendData?.checks?.[key]?.message || '';

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-4 rounded-xl border-2 transition-all ${getStatusColor(stage.status)}`}
            >
              <div className="relative flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(stage.status)}
                    <span className="text-white">{stage.name}</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {stage.status === 'verified' && (
                      <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-xs text-green-400">
                        ✓ Verified
                      </motion.span>
                    )}
                    {stage.status === 'alert' && (
                      <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-xs text-red-400">
                        ✗ Failed
                      </motion.span>
                    )}
                    {stage.status === 'suspicious' && (
                      <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-xs text-orange-400">
                        ⚠ Suspicious
                      </motion.span>
                    )}
                    {stage.status === 'pending' && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/40">
                        Waiting...
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {msg && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/50 pl-8">
                    {msg}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Risk Meter */}
      <RiskMeter score={riskScore} />

      {/* Recommendation badge */}
      {backendData?.recommendation && (
        <div className="text-center mt-2 text-sm">
          <span
            className={`px-3 py-1 rounded-full ${
              riskScore >= 75
                ? 'bg-red-500/20 text-red-400'
                : riskScore >= 50
                ? 'bg-orange-500/20 text-orange-400'
                : 'bg-green-500/20 text-green-400'
            }`}
          >
            {backendData.recommendation}
          </span>
        </div>
      )}
    </motion.div>
  );
}
