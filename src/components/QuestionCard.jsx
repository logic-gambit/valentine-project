import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function QuestionCard({ onYes }) {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoBtnPosition({ x, y });
    setHoverCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    const texts = [
      "No",
      "Are you sure?",
      "Really?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "I wouldn't say no!",
      "What about now?",
      "Please?",
    ];
    return texts[Math.min(hoverCount, texts.length - 1)];
  };

  const hearts = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 500 - 250,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      fontSize: Math.random() * 20 + 20,
    }));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 overflow-hidden relative">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: -1000,
              x: heart.x,
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear",
            }}
            className="absolute bottom-0 text-pink-300 left-1/2"
            style={{ fontSize: heart.fontSize }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full text-center z-10 border-2 border-pink-200"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-full flex justify-center mb-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q1anF6ODlsZnk0Z3Z3bmJ6Z3Z3bmJ6Z3Z3bmJ6Z3Z3bmJ6ZWZ5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt="Cute Bear"
            className="h-40 object-contain drop-shadow-lg"
          />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 font-serif">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative h-32">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition-colors z-20"
          >
            Yes 💖
          </motion.button>

          <motion.button
            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition-all absolute md:relative"
            style={{ position: hoverCount > 0 ? "absolute" : "relative" }}
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
