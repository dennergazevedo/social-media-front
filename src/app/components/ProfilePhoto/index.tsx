import Image from 'next/image';
import React from 'react';

const ProfilePhoto: React.FC<IProfile> = (profile: IProfile) => {
  return (
    <div className='flex border-2 border-solid border-emerald-500 w-[50px] h-[50px] object-cover rounded-lg overflow-hidden'>
      <Image 
        src={profile.photo} 
        alt="Foto do perfil" 
        width={48} 
        height={48}
        className='border-2 border-solid border-zinc-900 bg-zinc-900 w-14 h-14 object-cover rounded-lg'
      />
    </div>
  );
}

export default ProfilePhoto;