import React from 'react';
import { X } from 'lucide-react';
import { Download } from 'lucide-react';
import { useRef } from 'react';

// Modal component to display a download prompt
function Modal({ onClose }) {
    // Ref to track the modal div
    const modalRef = useRef();

    // Function to close the modal when clicking outside of it
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
  
    return (
        // Modal background and container
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-4 text-white'>
                {/* Button to close the modal */}
                <button onClick={onClose} className='place-self-end'><X size={30}/></button>
                
                {/* Modal content */}
                <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                    <h1 className='text-2xl font-extrabold'>DOWNLOAD FREE EBOOK</h1>
                    <p className='text-2xl font-bold max-w-md text-center'>Want to learn how to crack web development interviews like a pro?</p>
                    
                    {/* Form to input email and download the ebook */}
                    <form>
                        <input 
                           type="email" 
                           placeholder="Email" 
                           required 
                           className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
                        />
                        <button className='mt-4 w-full flex justify-center items-center gap-2 px-5 py-3 font-medium rounded-md bg-black'>
                            <Download /> Download Ebook
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;