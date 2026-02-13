import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GujaratiShayari({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50, rotate: 5 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        exit={{ scale: 0.8, y: 50, rotate: -5 }}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full relative paper-texture border-2 border-pink-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
        >
          <X />
        </button>

        <div className="text-center overflow-y-auto custom-scrollbar pr-2">
          <h3 className="text-xl font-serif text-pink-500 text-center mb-4 bg-pink-50 py-2 rounded-lg sticky top-0">
            ✨ Gujarati Love Shayari ✨
          </h3>

          <div className="space-y-4 text-left">
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તારી ખુશી માટે હું બધું જ કરી શકું છું,
              <br />
              તું કહે તો તારા માટે આખી દુનિયા સાથે લડી શકું છું."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "પ્રેમ એટલે તું, અને તું એટલે મારી આખી દુનિયા."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તને જોયા પછી હવે કઈ જોવાની ઈચ્છા નથી,
              <br />
              તારા પ્રેમ સિવાય હવે કઈ પામવાની ઈચ્છા નથી."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "સબંધો તો ઘણા જોયા મેં દુનિયામાં,
              <br />
              પણ તારા જેવો પ્રેમ ક્યાંય મળ્યો નથી."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તારા વગરની સાંજ પણ હવે અધૂરી લાગે છે,
              <br />
              તું સાથે હોય તો જિંદગી પૂરી લાગે છે."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "હૃદય ના ધબકારા બની ગઈ છે તું,
              <br />
              મારા જીવન નો શ્વાસ બની ગઈ છે તું."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "શબ્દો ખૂટી પડે છે તારા વખાણ માં,
              <br />
              તું તો પરી છે મારા સપના ના ગામ માં."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "કઈક તો જાદુ છે તારી આંખો માં,
              <br />
              જ્યારે પણ જોઉં છું, ખોવાઈ જાઉં છું."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તારો સાથ મળે તો સફર બની જાય છે મંઝિલ,
              <br />
              તું હોય તો ધડકે છે આ દિલ."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "પ્રેમ ની કોઈ ભાષા હોતી નથી,
              <br />
              પણ તારી આંખો માં બધું વંચાઈ જાય છે."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તું હસે છે ત્યારે ફૂલો ખીલે છે,
              <br />
              અને તું રડે છે ત્યારે વાદળો વરસે છે."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "આ જિંદગી માં જો કોઈ કમી હોત,
              <br />
              તો એ તારા વગર ની મારી જિંદગી હોત."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "તારા નામ થી જ શરૂ થાય છે મારો દિવસ,
              <br />
              અને તારા વિચારો માં જ પૂરી થાય છે રાત."
            </p>
            <p className="text-gray-600 italic border-b border-pink-50 pb-2">
              "પ્રેમ કરવો સહેલો છે, નિભાવવો અઘરો,
              <br />
              પણ તારી સાથે તો જિંદગી જીવવી સહેલી છે."
            </p>
            <p className="text-gray-600 italic">
              "બસ એક તું જ જોઈએ, બીજું કઈ નહિ,
              <br />
              મારા પ્રેમ ની આ જ છે સાચી સહી."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
