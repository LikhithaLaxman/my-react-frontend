// import { useState } from 'react';
// import { CallerSetup } from './components/CallerSetup';
// import { NetworkPipeline } from './components/NetworkPipeline';
// import { ReceiverSimulation } from './components/ReceiverSimulation';
// import { VishingEngine } from './components/VishingEngine';
// import { FraudAlert } from './components/FraudAlert';

// export default function App() {
//   const [callStarted, setCallStarted] = useState(false);
//   const [selectedNumber, setSelectedNumber] = useState('');
//   const [pipelineComplete, setPipelineComplete] = useState(false);
//   const [callAnswered, setCallAnswered] = useState(false);
//   const [engineComplete, setEngineComplete] = useState(false);
//   const [fraudDetected, setFraudDetected] = useState(false);

//   const handleStartCall = (number: string) => {
//     setSelectedNumber(number);
//     setCallStarted(true);
//     setPipelineComplete(false);
//     setCallAnswered(false);
//     setEngineComplete(false);
//     setFraudDetected(false);
//   };

//   const handlePipelineComplete = () => setPipelineComplete(true);
//   const handleAnswerCall = () => setCallAnswered(true);
//   const handleEngineComplete = () => {
//     setEngineComplete(true);
//     setTimeout(() => setFraudDetected(true), 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
//       {/* Background glow effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#742C9F]/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C8D7]/20 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10">
//         {/* Header Bar */}
//         <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
//           <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#742C9F] to-[#00C8D7] rounded-lg flex items-center justify-center">
//                   <span className="font-bold text-white">T</span>
//                 </div>
//                 <span className="text-white/80">Telstra Network</span>
//               </div>
//               <div className="w-px h-8 bg-white/20" />
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🛡️</span>
//                 <span className="bg-gradient-to-r from-[#742C9F] to-[#00C8D7] bg-clip-text text-transparent">
//                   Fair Dinkum!
//                 </span>
//               </div>
//             </div>
//             <p className="text-white/60 text-sm">Protecting Every Call</p>
//           </div>
//         </div>

//         {/* Main Simulation Content */}
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             {/* Left Column - Caller Setup */}
//             <CallerSetup
//               onStartCall={handleStartCall}
//               callStarted={callStarted}
//               disabled={callStarted && !fraudDetected}
//               fraudDetected={fraudDetected}
//             />

//             {/* Center Column - Network Pipeline */}
//             <div className="lg:col-span-1">
//               <NetworkPipeline
//                 isActive={callStarted}
//                 onComplete={handlePipelineComplete}
//                 showInitialScore={false}
//               />
//             </div>

//             {/* Right Column - Receiver Simulation */}
//             <ReceiverSimulation
//               isRinging={pipelineComplete && !callAnswered}
//               callerNumber={selectedNumber}
//               onAnswer={handleAnswerCall}
//               callAnswered={callAnswered}
//               fraudDetected={fraudDetected}
//             />
//           </div>

//           {/* AI Vishing Detection Engine */}
//           {callAnswered && (
//             <VishingEngine
//               isActive={callAnswered}
//               onComplete={handleEngineComplete}
//             />
//           )}

//           {/* Fraud Alert Banner */}
//           {fraudDetected && <FraudAlert />}

//           {/* Footer */}
//           <div className="mt-8 pt-6 border-t border-white/10 text-center">
//             <p className="text-sm text-white/50">
//               Built for Telstra Connected Future Hackathon ❤️
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import axios from 'axios';
import { CallerSetup } from './components/CallerSetup';
import { NetworkPipeline } from './components/NetworkPipeline';
import { ReceiverSimulation } from './components/ReceiverSimulation';
import { VishingEngine } from './components/VishingEngine';
import { FraudAlert } from './components/FraudAlert';
import { VoiceAnalysisResult } from './components/VoiceAnalysisResult';


export default function App() {
  const [callStarted, setCallStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [pipelineComplete, setPipelineComplete] = useState(false);
  const [callAnswered, setCallAnswered] = useState(false);
  const [engineComplete, setEngineComplete] = useState(false);
  const [fraudDetected, setFraudDetected] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ for waiting state
  const [securityData, setSecurityData] = useState<any>(null);
  const [voiceAnalysis, setVoiceAnalysis] = useState<any>(null);
  const [analyzingVoice, setAnalyzingVoice] = useState(false);
  


  // ✅ Updated to call backend FIRST and only start UI if successful
 const handleStartCall = async (number: string) => {
  setLoading(true);
  try {
    const response = await axios.post("http://localhost:5000/check_security", {
      number: number,
    });

    console.log("✅ Security Check Response:", response.data);
    setSecurityData(response.data);   // ✅ store backend data
    setSelectedNumber(number);
    setCallStarted(true);
  } catch (error) {
    console.error("❌ Error calling check_security API:", error);
    alert("Failed to start call — backend error.");
  } finally {
    setLoading(false);
  }
};


  const handlePipelineComplete = () => setPipelineComplete(true);
  const handleAnswerCall = () => setCallAnswered(true);
  const handleEngineComplete = () => {
    setEngineComplete(true);
    setTimeout(() => setFraudDetected(true), 1000);
  };

  const handleVoiceAnalyze = async () => {
  setAnalyzingVoice(true);
  setVoiceAnalysis(null);

  try {
    const response = await axios.post("http://localhost:5000/auto_record_and_analyze1");
    console.log("🎤 Voice Analysis Result:", response.data);
    setVoiceAnalysis(response.data); // store backend data
  } catch (error) {
    console.error("❌ Voice analysis failed:", error);
    alert("Error analyzing voice. Please try again.");
  } finally {
    setAnalyzingVoice(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#742C9F]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C8D7]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header Bar */}
        <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#742C9F] to-[#00C8D7] rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">T</span>
                </div>
                <span className="text-white/80">Telstra Network</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="bg-gradient-to-r from-[#742C9F] to-[#00C8D7] bg-clip-text text-transparent">
                  Fair Dinkum!
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm">Protecting Every Call</p>
          </div>
        </div>

        {/* Main Simulation Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column - Caller Setup */}
            <CallerSetup
              onStartCall={handleStartCall}
              callStarted={callStarted}
              disabled={loading || (callStarted && !fraudDetected)} // ✅ disable during backend call
              fraudDetected={fraudDetected}
            />

            {/* Center Column - Network Pipeline */}
            <div className="lg:col-span-1">
              <NetworkPipeline
                isActive={callStarted}
                onComplete={handlePipelineComplete}
                backendData={securityData}   // ✅ new line

              />
            </div>

            {/* Right Column - Receiver Simulation */}
            <ReceiverSimulation
              isRinging={pipelineComplete && !callAnswered}
              callerNumber={selectedNumber}
              onAnswer={handleVoiceAnalyze}   // new handler
              callAnswered={callAnswered}
              fraudDetected={fraudDetected}
            />
          </div>

         {callAnswered && voiceAnalysis && (
  <VishingEngine
    isActive={callAnswered}
    onComplete={handleEngineComplete}
    backendData={voiceAnalysis}   // ✅ send backend result here
  />
)}
{analyzingVoice && (
  <div className="text-center text-white/60 mt-4">Analyzing voice...</div>
)}

{voiceAnalysis && !analyzingVoice && (
  <VoiceAnalysisResult data={voiceAnalysis} />
)}



          {/* Fraud Alert Banner */}
          {fraudDetected && <FraudAlert />}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/50">
              Built for Telstra Connected Future Hackathon ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Optional Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white text-lg">
          Checking Security...
        </div>
      )}
    </div>
  );
}
