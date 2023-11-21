import React from 'react';
import NewComment from './new';
import ProfilePhoto from '../ProfilePhoto';
import { AiOutlineLike } from "react-icons/ai";

const Comments: React.FC<ICommentsFC> = ({ comments }: ICommentsFC) => {
  return (
    <div>
      <NewComment />
      { comments.map(comment => (
          <div key={`${comment.profile.name}-${comment.createdAt}`} className='mt-8 flex flex-col'>
            <div className='flex flex-row'>
              <ProfilePhoto { ...comment.profile }/>
              <div className='flex flex-col ml-2 justify-center mb-8'>
                <strong className='text-sm'>
                  { comment.profile.name }
                </strong>
                <span className='text-sm text-zinc-500'>
                  { comment.createdAt.toLocaleDateString() }
                </span>
              </div>
            </div>
            <div className='flex flex-col w-full bg-zinc-800 rounded p-4'>
              <span>
                { comment.text }
              </span>
            </div>
            <div className='text-emerald-500 mt-2 cursor-pointer flex flex-row items-center'>
              <AiOutlineLike />
              <span className='ml-2'>
                curtir • { comment.likes }
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Comments;