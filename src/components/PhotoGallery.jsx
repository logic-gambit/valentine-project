import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8fDB8fHww",
    caption: "Our First Date",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1596767784033-c5982855f483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvdmV8ZW58MHx8MHx8fDA%3D",
    caption: "Adventures",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFsZW50aW5lfGVufDB8fDB8fHww",
    caption: "Sweet Memories",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1675806652796-02758652d37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Silly Moments",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvdmV8ZW58MHx8MHx8fDA%3D",
    caption: "Together Forever",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvdmV8ZW58MHx8MHx8fDA%3D",
    caption: "My Favorite Person",
  },
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
            <div className="p-2 text-center text-pink-400 font-medium text-sm">
              {photo.caption}
            </div>
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
              <p className="text-white text-center mt-4 text-xl font-serif">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
