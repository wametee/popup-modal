import React from 'react'
import { X } from 'lucide-react';
import { Download } from 'lucide-react';


function Modal({onClose}) {
  
  return (
    
        <div className='fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className='mt-10 flex flex-col gap-4  text-white'>
                <button onClick={onClose} className='place-self-end'><X  size={30}/></button>
                <div className='bg-indigo-600  rounded-xl px-20 py-10 flex flex-col gap-5 items-center  mx-4'>
                    <h1 className='text-2xl font-extrabold'>DOWNLOAD FREE EBOOK</h1>
                    <p className='text-2xl font-bold max-w-md text-center'>What to learn how to crack web development interviews like a pro</p>
                    <form>
                        <input 
                           type="email" 
                           placeholder="Email" 
                           required 
                           className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
                        />
                        <button className='mt-4 w-full flex justify-center items-center gap-2 px-5 py-3 font-medium rounded-md bg-black'>< Download /> Download Ebook</button>
                    </form>
                </div>

            </div>
        </div>
  )
}

export default Modal
