import React from 'react';

const NewComment: React.FC = () => {
  return (
    <div className='flex flex-col items-start'>
      <strong className='mb-4'>
        Deixe seu comentário
      </strong>
      <textarea 
        className='w-full bg-zinc-800 p-4 rounded outline-none'
        placeholder='Escreva o seu comentário...'
      />
      <button className='mt-4 bg-emerald-500 p-4 py-2 rounded'>
        Publicar
      </button>
    </div>
  )
}

export default NewComment;