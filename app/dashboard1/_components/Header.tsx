"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
       
    const path=usePathname();
    useEffect(()=>{
     console.log(path)
    },[])   

  return (
    <div className='flex p-4 justify-between bg-white shadow-lg'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <ul className='hidden md:flex gap-6 items-center text-slate-800'>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1'&&'text-slate-700 font-bold'}`}>Dashboard</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/questions'&&'text-slate-700 font-bold'}`}>Questions</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/upgrade'&&'text-slate-700 font-bold'}`}>Upgrade</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/how'&&'text-slate-700 font-bold'}`}>How it works ?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header