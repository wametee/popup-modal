import "./index.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    // Main container with styling
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      {/* Heading */}
      <h1 className="text-5xl font-bold mt-4">Popup modal</h1>
      
      {/* Button to show the modal */}
      <button onClick={() => setShowModal(true)} className="bg-indigo-500 px-4 py-2 rounded-lg text-lg">
        Submit
      </button>
      
      {/* Conditional rendering of the modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
