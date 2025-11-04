import { motion } from 'motion/react';

export function AustraliaMap() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Australia outline */}
        <motion.path
          d="M 900 200 L 950 180 L 1000 200 L 1020 250 L 1000 300 L 950 350 L 900 400 L 850 450 L 800 480 L 750 500 L 700 500 L 650 480 L 600 450 L 550 400 L 500 350 L 480 300 L 500 250 L 550 200 L 600 180 L 650 200 L 700 220 L 750 200 L 800 180 L 850 190 L 900 200 Z"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 40}
            x2="1200"
            y2={i * 40}
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}

        {Array.from({ length: 30 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="800"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}

        {/* Glowing nodes */}
        {[
          { x: 700, y: 250, delay: 0 },
          { x: 850, y: 300, delay: 0.3 },
          { x: 600, y: 400, delay: 0.6 },
          { x: 750, y: 450, delay: 0.9 },
        ].map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="url(#gradient1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2 + node.delay, duration: 0.5 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              animate={{
                r: [6, 20, 6],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2 + node.delay,
              }}
            />
          </g>
        ))}

        {/* Connection lines */}
        <motion.path
          d="M 700 250 L 850 300 L 750 450 L 600 400 L 700 250"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3, delay: 2.5 }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#742C9F" />
            <stop offset="100%" stopColor="#00C8D7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}