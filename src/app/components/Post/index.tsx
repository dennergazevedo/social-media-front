import React, { useMemo } from 'react';
import ProfilePhoto from '../ProfilePhoto';
import Comments from '../Comments';

const ONE_DAY_MS = 86400000;

const Post: React.FC<IPostFC> = ({ post, profile }: IPostFC) => {

  const fullDate = useMemo(() => {
    const createdAt = new Date(post.createdAt);
    return `em ${createdAt.getDate()}/${createdAt.getMonth() + 1}`
  }, [post])

  const published = useMemo(() => {
    const now = new Date().getTime();
    const createdAt = new Date(post.createdAt);
    const postTime = createdAt.getTime();
    const hours = (now - postTime) / 3600000;

    if(now - postTime > ONE_DAY_MS) return fullDate;
    else if(hours > 1) return `há ${Math.floor(hours)}h`;
    else return `há ${hours * 60}min`;

  }, [post, fullDate])

  return (
    <div className='mb-8 bg-zinc-900 rounded-2xl p-8 w-full'>
      <div className='flex flex-col items-start justify-between w-full relative'>
        <div className='flex flex-row'>
          <ProfilePhoto { ...profile }/>
          <div className='ml-4'>
            <h3 className='mt-1'>
              {profile.name}
            </h3>
            <span className='text-sm text-zinc-600'>
              {profile.title}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <article className='mt-8 pb-8 text-zinc-400'>
            { post.text }
          </article>
          <div className='text-sm text-zinc-500'>
            Publicado { published }
          </div>
        </div>
      </div>
      <hr className='border-t-1 border-solid border-zinc-800 w-full mt-8 mb-8'/>
      <Comments comments={post.comments} />
    </div>
  )
}

export default Post;