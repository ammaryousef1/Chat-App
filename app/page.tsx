"use client"
import Image from 'next/image'
import Navbar from './Component/Navbar'
import Chat from './Component/Chat'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Home() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className='text-center mx-auto max-w-[728px] '>
      <section className='flex flex-col h-[90hv] gap-y-80 bg-gray-100 mt-10 shadow-xl border relative'>
        <Navbar />
        {user ?   <Chat /> : null}
      </section>
    </div>
  )
}
