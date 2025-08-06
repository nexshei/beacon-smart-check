import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bluetooth, QrCode, Zap } from "lucide-react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader shows for minimum time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(217, 91%, 45%))"
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              className="text-5xl font-bold text-white mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              TallyCheck
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="text-white/90 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Smart. Seamless. Student Attendance.
            </motion.div>

            {/* Animated Icons */}
            <motion.div
              className="flex justify-center space-x-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[Bluetooth, QrCode, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
              ))}
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;