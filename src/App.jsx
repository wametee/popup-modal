import "./index.css"
import Modal from "./components/Modal"
import { useState } from "react"
function App() {
  const [showModal, setShowModal] = useState(false)

  return (
     <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
        <h1 className="text-5xl font-bold mt-4">Popup modal</h1>
        <button onClick={() => setShowModal(true)} className="bg-indigo-500 px-4 py-2 rounded-lg text-lg">Submit</button>
        {showModal && <Modal onClose={() => setShowModal(false)}/>}
     </div>
  )
}

export default App
