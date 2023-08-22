import React from 'react'
import {auth} from '../firebase'
const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }

  return (
   <button onClick={() => auth.signOut()} className='bg-gray-300 text-black px-4 py-2 hover:bg-gray-100 '>
    LogOut
   </button>
  )
}

export default LogOut