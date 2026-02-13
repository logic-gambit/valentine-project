import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [isValentine, setIsValentine] = useState(false);

  return (
    <main className="min-h-screen font-sans bg-pink-50 text-gray-800">
      {isValentine ? (
        <SuccessPage />
      ) : (
        <QuestionCard onYes={() => setIsValentine(true)} />
      )}
    </main>
  );
}

export default App;
