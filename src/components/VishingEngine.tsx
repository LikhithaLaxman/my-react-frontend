import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
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
} from 'lucide-react';

interface VishingEngineProps {
  isActive: boolean;
  onComplete?: () => void;
  targetScore: number; // 👈 confidence score from API
}

type StepStatus = 'pending' | 'active' | 'complete';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: typeof Lock;
  status: StepStatus;
  color: string;
}

export function VishingEngine({
  isActive,
  onComplete,
  targetScore,
}: VishingEngineProps) {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: '1',
      title: 'Secure Capture',
      description: 'Audio encrypted on device (EAT token)',
      icon: Lock,
      status: 'pending',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: '2',
      title: 'Signal Processing',
      description: 'Noise filtering and standardization',
      icon: Waves,
      status: 'pending',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: '3',
      title: 'Feature Extraction',
      description: 'MFCC / pitch / energy patterns via Librosa',
      icon: FileSearch,
      status: 'pending',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: '4',
      title: 'Encrypted Match',
      description: 'Voiceprint compared with trusted pattern database',
      icon: Shield,
      status: 'pending',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: '5',
      title: 'Deepfake Detection',
      description: 'AI model evaluates synthetic probability',
      icon: Brain,
      status: 'pending',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: '6',
      title: 'Decision Output',
      description: 'Result displayed with confidence meter',
      icon: AlertTriangle,
      status: 'pending',
      color: 'from-red-500 to-red-600',
    },
  ]);

  const [syntheticProbability, setSyntheticProbability] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<
    'initializing' | 'processing' | 'analyzing' | 'complete'
  >('initializing');

  useEffect(() => {
    if (!isActive) return;

    setCurrentPhase('initializing');

    setTimeout(() => {
      setCurrentPhase('processing');
    }, 1000);

    const stepDurations = [800, 1000, 1200, 1000, 1500, 1000];
    let totalDelay = 1000;

    steps.forEach((_, index) => {
      // Step Active
      setTimeout(() => {
        setSteps((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], status: 'active' };
          return updated;
        });
        if (index === 4) setCurrentPhase('analyzing');
      }, totalDelay);

      // Step Complete
      totalDelay += stepDurations[index];
      setTimeout(() => {
        setSteps((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], status: 'complete' };
          return updated;
        });

        // Animate probability only once (for Deepfake Detection)
        if (index === 4) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const newValue = Math.round(progress * targetScore);
            setSyntheticProbability(newValue);
            if (progress < 1) requestAnimationFrame(animate);
            else setCurrentPhase('complete');
          };
          requestAnimationFrame(animate);
        }
      }, totalDelay);
    });

    // Trigger completion callback at end
    setTimeout(() => {
      onComplete?.();
    }, totalDelay + 500);
  }, [isActive, targetScore, onComplete]);

  const getWaveformColor = () => {
    if (syntheticProbability < 30) return { from: '#00C8D7', to: '#0EA5E9' };
    if (syntheticProbability < 70) return { from: '#F59E0B', to: '#F97316' };
    return { from: '#EF4444', to: '#DC2626' };
  };

  const colors = getWaveformColor();

  // Everything else (animations, visuals, waveform, steps, etc.) stays identical
  // Keep your original JSX layout below ↓↓↓
  return (
    // ⚙️ keep your same visual layout here (the part after return)
    // — it will now reflect the animated syntheticProbability coming from the API.
    // The only change is that now it’s driven by targetScore prop instead of hardcoded 84.
    <div>
      {/* ... your full JSX from before ... */}
    </div>
  );
}
