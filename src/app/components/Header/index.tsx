import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="flex w-100 items-center justify-center bg-zinc-900 mb-4">
      <Image 
        className='p-4'
        src={logo} 
        alt="Logomarca do Ignite" 
      />
    </header>
  );
}

export default Header;