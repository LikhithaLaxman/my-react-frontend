// // import { motion } from 'motion/react';
// // import { CheckCircle2, XCircle, AlertTriangle, Mic } from 'lucide-react';

// // interface VoiceAnalysisResultProps {
// //   data: any;
// // }

// // export function VoiceAnalysisResult({ data }: VoiceAnalysisResultProps) {
// //   if (!data) return null;

// //   const isSynthetic = data.summary?.is_synthetic;
// //   const confidence = (data.summary?.confidence || 0) * 100;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.4 }}
// //       className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-6"
// //     >
// //       <div className="flex items-center gap-3 mb-4">
// //         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#742C9F] to-[#00C8D7] flex items-center justify-center">
// //           <Mic className="w-5 h-5 text-white" />
// //         </div>
// //         <div>
// //           <h2 className="text-xl text-white">Voice Analysis Result</h2>
// //           <p className="text-sm text-white/60">AI-based Vishing Detection</p>
// //         </div>
// //       </div>

// //       {isSynthetic ? (
// //         <div className="flex items-center gap-2 text-red-400 text-lg">
// //           <XCircle className="w-6 h-6" />
// //           <p>Computer Generated Voice Detected</p>
// //         </div>
// //       ) : (
// //         <div className="flex items-center gap-2 text-green-400 text-lg">
// //           <CheckCircle2 className="w-6 h-6" />
// //           <p>Human Voice Detected</p>
// //         </div>
// //       )}

// //       <p className="text-white/60 text-sm mt-2">
// //         Confidence: {confidence.toFixed(1)}%
// //       </p>

// //       {data.summary?.details && (
// //         <div className="mt-3 text-xs text-white/60 space-y-1">
// //           <p>Pitch Variability: {data.summary.details.pitch_variability?.toFixed(3)}</p>
// //           <p>Rhythm Regularity: {data.summary.details.rhythm_regularity?.toFixed(3)}</p>
// //           <p>Harmonic Ratio: {data.summary.details.harmonic_ratio?.toFixed(3)}</p>
// //         </div>
// //       )}
// //     </motion.div>
// //   );
// // }


// import { motion } from 'motion/react';
// import {
//   Brain,
//   Lock,
//   Waves,
//   FileSearch,
//   Shield,
//   AlertTriangle,
//   CheckCircle2,
//   XCircle,
//   PhoneOff,
//   Gauge,
//   UserCheck,
//   BarChart2,
//   Music,
//  Activity,
//  AudioWaveformIcon
// } from 'lucide-react';

// interface VoiceAnalysisResultProps {
//   data: any;
// }

// export function VoiceAnalysisResult({ data }: VoiceAnalysisResultProps) {
//   if (!data) return null;

//   const isSynthetic = data.summary?.is_synthetic;
//   const confidence = Math.round((data.summary?.confidence || 0) * 100);
//   const details = data.summary?.details || {};

//   const getWaveColor = () => {
//     if (isSynthetic) return { from: '#EF4444', to: '#DC2626' }; // red
//     return { from: '#00C8D7', to: '#00A8B0' }; // teal
//   };

//   const colors = getWaveColor();

//   const riskLabel = isSynthetic
//     ? 'High Risk - Fraud Detected'
//     : 'Low Risk - Human Verified';

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="relative bg-gradient-to-br from-black/60 via-slate-900/60 to-black/60 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-8 space-y-8 overflow-hidden"
//     >
//       {/* Header */}
//       <div className="relative text-center space-y-4">
//         <div className="relative inline-block">
//           <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
//             <div
//               className="absolute inset-0 bg-gradient-to-r from-[#742C9F] to-[#00C8D7] blur-2xl rounded-full opacity-40"
//             />
//             <Brain className="relative w-16 h-16 text-white" />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-3xl text-white">
//             Fair Dinkum! AI Vishing Detection Engine
//           </h2>
//           <p className="text-[#00C8D7] uppercase text-sm tracking-wider">
//             Analysis Complete
//           </p>
//         </div>
//       </div>

//       {/* Waveform Visualization */}
//       <div className="relative">
//         <div className="relative h-48 bg-black/60 rounded-2xl border border-white/10 overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center gap-0.5 px-4">
//             {Array.from({ length: 80 }).map((_, i) => {
//               const phase = (i / 80) * Math.PI * 4;
//               const baseHeight = 40 + Math.sin(phase) * 20;
//               return (
//                 <div
//                   key={i}
//                   className="flex-1 rounded-full relative"
//                   style={{
//                     height: `${baseHeight}%`,
//                     background: `linear-gradient(to top, ${colors.from}, ${colors.to})`,
//                     opacity: 0.8,
//                   }}
//                 />
//               );
//             })}
//           </div>

//           {/* Center Display */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div
//               className="relative bg-black/90 backdrop-blur-md border-2 rounded-2xl px-8 py-6"
//               style={{ borderColor: colors.from }}
//             >
//               <div className="text-center space-y-2">
//                 <p className="text-sm text-white/60 uppercase tracking-wide">
//                   Synthetic Voice Probability
//                 </p>
//                 <p
//                   className="text-6xl text-white tabular-nums"
//                   style={{
//                     textShadow: `0 0 30px ${colors.from}`,
//                   }}
//                 >
//                   {confidence}%
//                 </p>
//                 <p
//                   className="text-sm uppercase tracking-wider"
//                   style={{ color: colors.from }}
//                 >
//                   {riskLabel}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Backend Metrics Grid (Styled Cards like Step Grid) */}
// <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//   {[
//     {
//       title: 'Detection Confidence',
//       value: `${(data.summary?.confidence * 100).toFixed(1)}%`,
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: Gauge,
//     },
//     {
//       title: 'Harmonic Ratio',
//       value: details.harmonic_ratio?.toFixed(3) || 'N/A',
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: BarChart2,
//     },
//     {
//       title: 'Pitch Variability',
//       value: details.pitch_variability?.toFixed(3) || 'N/A',
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: AudioWaveformIcon,
//     },
//     {
//       title: 'Rhythm Regularity',
//       value: details.rhythm_regularity?.toFixed(3) || 'N/A',
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: Music,
//     },
//     {
//       title: 'Spectral Mean',
//       value: details.spectral_contrast?.mean
//         ? details.spectral_contrast.mean.toFixed(3)
//         : 'N/A',
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: Activity,
//     },
//     {
//       title: 'Zero Crossing Rate',
//       value: details.zero_crossing_rate?.toFixed(3) || 'N/A',
//       color: isSynthetic
//         ? 'from-red-500 to-red-700'
//         : 'from-[#00C8D7] to-[#00A8B0]',
//       icon: AlertTriangle,
//     },
//   ].map(({ title, value, color, icon: Icon }) => (
//     <div
//       key={title}
//       className="relative p-4 rounded-xl border-2 border-white/10 bg-black/20 transition-all hover:border-white/20"
//     >
//       {/* Icon + Value Section */}
//       <div className="flex items-center gap-3">
//         <div
//           className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${color} shadow-md shadow-white/10`}
//         >
//           <Icon className="w-5 h-5 text-white" />
//         </div>
//         <div>
//           <p className="text-sm text-white font-medium">{title}</p>
//           <p
//             className="text-sm font-semibold mt-1"
//             style={{ color: isSynthetic ? '#F87171' : '#00C8D7' }}
//           >
//             {value}
//           </p>
//         </div>
//       </div>

//       {/* Subtle Glow */}
//       <div
//         className="absolute inset-0 rounded-xl blur-xl opacity-10"
//         style={{
//           background: `linear-gradient(to right, ${
//             isSynthetic ? '#DC2626' : '#00C8D7'
//           }, transparent)`,
//         }}
//       />
//     </div>
//   ))}
// </div>


//       {/* ✅ Fraud Alert Section - only if synthetic */}
//       {isSynthetic && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mt-8 bg-gradient-to-br from-red-900/80 to-red-800/70 border border-red-600/40 rounded-2xl p-6 text-white"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <AlertTriangle className="w-6 h-6 text-red-400" />
//             <h3 className="text-xl font-semibold">
//               Call Disconnected — AI Voice Fraud Detected
//             </h3>
//           </div>
//           <p className="text-white/70 mb-6">
//             Fair Dinkum terminated this call to prevent a vishing attempt.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="bg-black/50 border border-red-700/40 p-4 rounded-xl">
//               <PhoneOff className="w-6 h-6 text-red-400 mb-2" />
//               <p className="text-red-400 font-medium">Call Terminated</p>
//               <p className="text-white/60 text-xs">
//                 Automatically blocked by AI
//               </p>
//             </div>
//             <div className="bg-black/50 border border-red-700/40 p-4 rounded-xl">
//               <XCircle className="w-6 h-6 text-red-400 mb-2" />
//               <p className="text-red-400 font-medium">
//                 Synthetic Voice: {confidence}%
//               </p>
//               <p className="text-white/60 text-xs">
//                 High probability detected
//               </p>
//             </div>
//             <div className="bg-black/50 border border-green-700/40 p-4 rounded-xl">
//               <UserCheck className="w-6 h-6 text-green-400 mb-2" />
//               <p className="text-green-400 font-medium">User Protected</p>
//               <p className="text-white/60 text-xs">No data compromised</p>
//             </div>
//           </div>

//           <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap justify-center gap-6 text-sm text-white/50">
//             <span>🔒 Telstra Network</span>
//             <span>🧠 CAMARA APIs</span>
//             <span>🛡️ Fair Dinkum Protection</span>
//           </div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Brain,
  Lock,
  Waves,
  FileSearch,
  Shield,
  AlertTriangle,
  Cpu,
  Activity,
  Zap,
} from "lucide-react";

interface VoiceAnalysisResultProps {
  data: any;
}

export function VoiceAnalysisResult({ data }: VoiceAnalysisResultProps) {
  if (!data) return null;

  const targetScore = Math.round((data.summary?.confidence || 0) * 100);
  const [syntheticProbability, setSyntheticProbability] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<
    "initializing" | "processing" | "analyzing" | "complete"
  >("initializing");

  const [steps, setSteps] = useState([
    {
      id: "1",
      title: "Secure Capture",
      description: "Audio encrypted on device (EAT token)",
      icon: Lock,
      status: "pending",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "2",
      title: "Signal Processing",
      description: "Noise filtering and standardization",
      icon: Waves,
      status: "pending",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "3",
      title: "Feature Extraction",
      description: "MFCC / pitch / energy patterns via Librosa",
      icon: FileSearch,
      status: "pending",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "4",
      title: "Encrypted Match",
      description: "Voiceprint compared with trusted database",
      icon: Shield,
      status: "pending",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "5",
      title: "Deepfake Detection",
      description: "AI model evaluates synthetic probability",
      icon: Brain,
      status: "pending",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "6",
      title: "Decision Output",
      description: "Result displayed with confidence meter",
      icon: AlertTriangle,
      status: "pending",
      color: "from-red-500 to-red-600",
    },
  ]);

  useEffect(() => {
    // Run the animation sequence automatically
    let totalDelay = 800;
    const stepDurations = [700, 900, 1000, 1000, 1300, 800];

    setCurrentPhase("initializing");
    setTimeout(() => setCurrentPhase("processing"), 1000);

    steps.forEach((_, index) => {
      // activate
      setTimeout(() => {
        setSteps((prev) => {
          const updated = [...prev];
          updated[index].status = "active";
          return updated;
        });
        if (index === 4) setCurrentPhase("analyzing");
      }, totalDelay);

      // complete
      totalDelay += stepDurations[index];
      setTimeout(() => {
        setSteps((prev) => {
          const updated = [...prev];
          updated[index].status = "complete";
          return updated;
        });

        if (index === 4) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.round(progress * targetScore);
            setSyntheticProbability(value);
            if (progress < 1) requestAnimationFrame(animate);
            else setCurrentPhase("complete");
          };
          requestAnimationFrame(animate);
        }
      }, totalDelay);
    });
  }, [targetScore]);

  const getWaveformColor = () => {
    if (syntheticProbability < 30) return { from: "#00C8D7", to: "#0EA5E9" };
    if (syntheticProbability < 70) return { from: "#F59E0B", to: "#F97316" };
    return { from: "#EF4444", to: "#DC2626" };
  };

  const colors = getWaveformColor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-black/60 via-slate-900/60 to-black/60 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-8 space-y-8 overflow-hidden"
    >
      {/* ⚡ Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00C8D7 1px, transparent 1px),
              linear-gradient(to bottom, #742C9F 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#742C9F] to-[#00C8D7]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* 🧠 Central Brain Animation */}
      <div className="relative text-center space-y-4">
        <div className="relative inline-block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 blur-2xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-[#742C9F] via-[#00C8D7] to-[#742C9F] rounded-full" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative w-32 h-32 mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-[#742C9F]/30 rounded-full"
              style={{ borderTopColor: "#742C9F", borderRightColor: "transparent" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-4 border-[#00C8D7]/30 rounded-full"
              style={{ borderTopColor: "#00C8D7", borderLeftColor: "transparent" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-[#742C9F] to-[#00C8D7] blur-xl rounded-full"
              />
              <Brain className="relative w-16 h-16 text-white" />
            </div>
          </motion.div>
        </div>

        <motion.h2
          animate={{
            textShadow: [
              "0 0 20px rgba(116, 44, 159, 0.5)",
              "0 0 40px rgba(0, 200, 215, 0.5)",
              "0 0 20px rgba(116, 44, 159, 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl text-white"
        >
          Fair Dinkum! AI Vishing Detection Engine
        </motion.h2>
        <div className="flex items-center justify-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#00C8D7]"
          />
          <p className="text-[#00C8D7] uppercase text-sm tracking-wider">
            {currentPhase === "initializing" && "System Initializing..."}
            {currentPhase === "processing" && "Processing Voice Data..."}
            {currentPhase === "analyzing" && "Analyzing Synthetic Patterns..."}
            {currentPhase === "complete" && "Analysis Complete"}
          </p>
        </div>
      </div>

      {/* 🎵 Waveform Visualization */}
      <div className="relative h-48 bg-black/60 rounded-2xl border border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00C8D7 1px, transparent 1px),
              linear-gradient(to bottom, #742C9F 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Animated Bars */}
        <div className="absolute inset-0 flex items-center justify-center gap-0.5 px-4">
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-full relative"
              style={{
                background: `linear-gradient(to top, ${colors.from}, ${colors.to})`,
              }}
              animate={{
                height: [
                  "30%",
                  `${30 + Math.random() * 60}%`,
                  "30%",
                ],
              }}
              transition={{
                duration: 0.3 + Math.random() * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Center Score */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-black/90 backdrop-blur-md border-2 rounded-2xl px-8 py-6"
            style={{ borderColor: colors.from }}
          >
            <p className="text-sm text-white/60 uppercase tracking-wide text-center">
              Synthetic Voice Probability
            </p>
            <motion.p
              key={syntheticProbability}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-6xl text-white tabular-nums text-center"
              style={{ textShadow: `0 0 30px ${colors.from}` }}
            >
              {syntheticProbability}%
            </motion.p>
            <p
              className="text-sm uppercase tracking-wider text-center"
              style={{ color: colors.from }}
            >
              {syntheticProbability < 30 && "Low Risk"}
              {syntheticProbability >= 30 &&
                syntheticProbability < 70 &&
                "Moderate Risk"}
              {syntheticProbability >= 70 && "High Risk - Fraud Detected"}
            </p>
          </motion.div>
        </div>

        {/* Scanning Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-1"
          style={{
            background: `linear-gradient(to bottom, transparent, ${colors.from}, transparent)`,
            boxShadow: `0 0 20px ${colors.from}`,
          }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ⚙️ Step Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`p-4 rounded-xl border-2 ${
                step.status === "active"
                  ? "border-[#00C8D7] bg-[#00C8D7]/10"
                  : step.status === "complete"
                  ? "border-[#742C9F] bg-[#742C9F]/10"
                  : "border-white/10 bg-black/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${step.color}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white">{step.title}</p>
                  <p className="text-xs text-white/60">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Attribution */}
      <div className="relative flex items-center justify-center gap-3 pt-6 border-t border-white/10">
        <Waves className="w-5 h-5 text-[#00C8D7]" />
        <p className="text-sm text-white/60">
          Powered by <span className="text-[#00C8D7]">Librosa</span> Audio
          Analysis Library
        </p>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#00C8D7]"
        />
      </div>
    </motion.div>
  );
}

