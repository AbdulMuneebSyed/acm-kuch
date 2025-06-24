"use client";

import { useState, useEffect } from "react";

export default function CyberpunkPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [glitchText, setGlitchText] = useState("LOADING");

  const glitchVariations = [
    "L0ADING",
    "LOADING",
    "L04D1NG",
    "LOADING",
    "LO4DING",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    const glitchInterval = setInterval(() => {
      setGlitchText(
        glitchVariations[Math.floor(Math.random() * glitchVariations.length)]
      );
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  if (!isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-blue-600 text-2xl font-mono animate-pulse">
          {"> SYSTEM READY_"}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-purple-100/50" />
        <div
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `
        linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
      `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Glitch logo/title */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-4 relative">
            <span className="text-blue-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-pulse">
              CYBER
            </span>
            <span className="text-purple-600 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)] animate-pulse delay-100">
              PUNK
            </span>
            {/* Glitch overlay */}
            <div className="absolute inset-0 text-red-400 opacity-20 animate-glitch">
              CYBERPUNK
            </div>
          </h1>
        </div>

        {/* Loading text with glitch effect */}
        <div className="mb-8">
          <div className="text-2xl md:text-3xl font-mono text-green-600 drop-shadow-[0_0_5px_rgba(34,197,94,0.3)] relative">
            <span className="animate-pulse">{glitchText}</span>
            <span className="animate-blink ml-1">_</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between text-blue-600 font-mono text-sm mb-2">
            <span>{"> INITIALIZING SYSTEM"}</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 border border-blue-600 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent w-8 animate-scan" />
          </div>
        </div>

        {/* Loading indicators */}
        <div className="flex space-x-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* System status */}
        <div className="text-center font-mono text-sm text-gray-600 space-y-1">
          <div className="animate-pulse">{"> Loading neural networks..."}</div>
          <div className="animate-pulse delay-300">
            {"> Establishing connection..."}
          </div>
          <div className="animate-pulse delay-700">
            {"> Synchronizing data streams..."}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-600 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-glitch {
          animation: glitch 0.3s infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-scan {
          animation: scan 2s infinite;
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
