import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import images
import img1 from "../assets/WhatsApp Image 2026-02-13 at 17.59.56.jpeg";
import img2 from "../assets/WhatsApp Image 2026-02-13 at 17.59.57.jpeg";
import img3 from "../assets/WhatsApp Image 2026-02-13 at 17.59.58 (1).jpeg";
import img4 from "../assets/WhatsApp Image 2026-02-13 at 17.59.58 (2).jpeg";
import img5 from "../assets/WhatsApp Image 2026-02-13 at 17.59.58.jpeg";
import img6 from "../assets/WhatsApp Image 2026-02-13 at 17.59.59.jpeg";
import img7 from "../assets/WhatsApp Image 2026-02-13 at 18.00.00.jpeg";
import img8 from "../assets/WhatsApp Image 2026-02-13 at 18.00.01 (1).jpeg";
import img9 from "../assets/WhatsApp Image 2026-02-13 at 18.00.01.jpeg";
import img10 from "../assets/WhatsApp Image 2026-02-13 at 18.00.02.jpeg";

const photos = [
  { id: 1, src: img1, caption: "Beautiful Moment 1" },
  { id: 2, src: img2, caption: "Beautiful Moment 2" },
  { id: 3, src: img3, caption: "Beautiful Moment 3" },
  { id: 4, src: img4, caption: "Beautiful Moment 4" },
  { id: 5, src: img5, caption: "Beautiful Moment 5" },
  { id: 6, src: img6, caption: "Beautiful Moment 6" },
  { id: 7, src: img7, caption: "Beautiful Moment 7" },
  { id: 8, src: img8, caption: "Beautiful Moment 8" },
  { id: 9, src: img9, caption: "Beautiful Moment 9" },
  { id: 10, src: img10, caption: "Beautiful Moment 10" },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center font-serif">
        Our Memories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md border-2 border-pink-100 bg-white"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-48 object-cover transition-transform hover:scale-110 duration-500"
            />
            {/* <div className="p-2 text-center text-pink-400 font-medium text-sm">
              {photo.caption}
            </div> */}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-10"
              >
                <X className="text-black w-6 h-6" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
              />
              {/* <p className="text-white text-center mt-4 text-xl font-serif">
                {selectedPhoto.caption}
              </p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
