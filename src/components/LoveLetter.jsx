import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function LoveLetter({ isOpen, onClose }) {
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
        initial={{ scale: 0.8, y: 50, rotate: -5 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        exit={{ scale: 0.8, y: 50, rotate: 5 }}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full relative paper-texture border-2 border-pink-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-serif text-pink-600 mb-6">
            My Dearest Valentine,
          </h2>
          <p className="text-gray-700 leading-relaxed font-serif text-lg text-left">
            મારી ખાસ વ્યક્તિને, હજી તું મારી પત્ની નથી બની, પણ દિલમાં તારો સ્થાન
            પહેલેથી જ પાકું થઈ ગયું છે. તારી વાતોમાં શાંતિ છે, તારા સ્મિતમાં
            મારી દુનિયા છે. તારી સાથે ભવિષ્યની કલ્પના કરું ત્યારે બધું વધુ સુંદર
            લાગે છે. આપણે હજી સફરની શરૂઆતમાં છીએ, પણ મને પૂરો વિશ્વાસ છે કે આ
            સફર પ્રેમ, સમજ અને ખુશીઓથી ભરેલી હશે. ધીમે ધીમે, હાથમાં હાથ રાખીને,
            આપણે આપણું જીવન સાથે બનાવીએ — બસ એટલું જ મને સૌથી વધુ ખુશ કરે છે.
            <br />
            <br />
            I promise to always be there for you, to support you, and to love
            you more with each passing day.
            <br />
            <br />
            Thank you for being you.
            <br />
            <br />
            Forever yours,
            <br />
            <span className="font-bold">Bhavik Panchal</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
