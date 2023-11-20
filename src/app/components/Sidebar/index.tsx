import Image from 'next/image';
import React from 'react';

import { AiOutlineEdit } from "react-icons/ai";
import ProfilePhoto from '../ProfilePhoto';

const Sidebar: React.FC<ISidebar> = ({ profile }: ISidebar) => {
  return (
    <nav className="flex flex-col justify-center items-center max-w-xs rounded-2xl overflow-hidden relative bg-zinc-900 w-full">
      <div className='max-h-16 overflow-hidden absolute top-0 left-0 z-0'>
        <Image 
          src={profile.cover} 
          alt="Cover background" 
          width="320" 
          height="64"
        />
      </div>
      <div className='flex flex-col justify-center items-center z-10 p-8 pt-12'>
        <ProfilePhoto { ...profile }/>
        <h3 className='mt-1'>
          {profile.name}
        </h3>
        <span className='text-sm text-zinc-600'>
          {profile.title}
        </span>
      </div>
      <hr className='border-t-1 border-solid border-zinc-800 w-full'/>
      <div className='p-8'>
        <a href={"#"} className='flex justify-center items-center border border-solid border-emerald-500 p-8 py-2 rounded-md text-emerald-500'>
          <AiOutlineEdit className="mr-2" />{" "}
          Editar seu perfil
        </a>
      </div>
    </nav>
  )
}

export default Sidebar;