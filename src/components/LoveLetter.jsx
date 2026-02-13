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
          <h2 className="text-3xl font-serif text-pink-600 mb-6">
            My Dearest Valentine,
          </h2>
          <div className="text-gray-700 leading-relaxed font-serif text-lg text-left">
            <p>
              મારી ખાસ વ્યક્તિને, હજી તું મારી પત્ની નથી બની, પણ દિલમાં તારો
              સ્થાન પહેલેથી જ પાકું થઈ ગયું છે. તારી વાતોમાં શાંતિ છે, તારા
              સ્મિતમાં મારી દુનિયા છે. તારી સાથે ભવિષ્યની કલ્પના કરું ત્યારે
              બધું વધુ સુંદર લાગે છે. આપણે હજી સફરની શરૂઆતમાં છીએ, પણ મને પૂરો
              વિશ્વાસ છે કે આ સફર પ્રેમ, સમજ અને ખુશીઓથી ભરેલી હશે. ધીમે ધીમે,
              હાથમાં હાથ રાખીને, આપણે આપણું જીવન સાથે બનાવીએ — બસ એટલું જ મને
              સૌથી વધુ ખુશ કરે છે.
            </p>
            <br />
            <p>
              I promise to always be there for you, to support you, and to love
              you more with each passing day.
            </p>
            <br />
            <p>Thank you for being you.</p>
            <br />
            <p>Forever yours,</p>
            <span className="font-bold">Bhavik Panchal</span>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-pink-100 text-left">
            <h3 className="text-xl font-serif text-pink-500 text-center mb-4 bg-pink-50 py-2 rounded-lg">
              ✨ Gujarati Love Shayari ✨
            </h3>

            <div className="space-y-4">
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
        </div>
      </motion.div>
    </motion.div>
  );
}
