import React from 'react'

import UserPost from './UserPost'

const InfiniteScrollList = () => {

  const post = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  return (
    <div className="container w-11/12 h-screen mt-6 overflow-y-scroll no-scrollbar">
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
      <UserPost {...post} />
    </div>
  )
}

export default InfiniteScrollList