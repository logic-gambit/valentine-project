import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import PhotoGallery from "./PhotoGallery";
import LoveLetter from "./LoveLetter";
import GujaratiShayari from "./GujaratiShayari";

export default function SuccessPage() {
  const [showLetter, setShowLetter] = useState(false);
  const [showShayari, setShowShayari] = useState(false);

  useEffect(() => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const particleCount = 50;
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-8 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-bounce">
          YAY! I knew you'd say Yes! 💖
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-bounce">
          I Love you Hanny 💖
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Best decision ever! scroll down for a surprise...
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowLetter(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            Read a Letter for You 💌
          </button>
          <button
            onClick={() => setShowShayari(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            Read my lovely thoughts ✨
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showLetter && (
          <LoveLetter
            isOpen={showLetter}
            onClose={() => setShowLetter(false)}
          />
        )}
        {showShayari && (
          <GujaratiShayari
            isOpen={showShayari}
            onClose={() => setShowShayari(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full max-w-4xl mt-8"
      >
        <PhotoGallery />
      </motion.div>
    </div>
  );
}
