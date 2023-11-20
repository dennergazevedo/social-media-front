import React from 'react';
import Post from '../Post';

const Feed: React.FC<IFeed> = ({ profile, posts }: IFeed) => {
  return (
    <div className="flex max-w-xs mt-8 w-full md:max-w-none md:mt-0 md:ml-4">
      <ul className="flex flex-col w-full">
        { posts.map(post => (
          <Post key={`${profile.email}-${post.createdAt}`} profile={profile} post={post} />
        ))}
      </ul>
    </div>
  )
}

export default Feed;