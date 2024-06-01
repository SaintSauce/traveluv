import React from 'react'

import UserPost from './UserPost'

import beautiful_place_1 from '../../assets/travel_images/beautiful_place_1.jpg'
import beautiful_place_2 from '../../assets/travel_images/beautiful_place_2.jpg'
import beautiful_place_3 from '../../assets/travel_images/beautiful_place_3.jpeg'
import beautiful_place_4 from '../../assets/travel_images/beautiful_place_4.png'
import beautiful_place_5 from '../../assets/travel_images/beautiful_place_5.jpg'

const InfiniteScrollList = () => {

  const post1 = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    img_link: beautiful_place_1,
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  const post2 = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    img_link: beautiful_place_2,
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  const post3 = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    img_link: beautiful_place_3,
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  const post4 = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    img_link: beautiful_place_4,
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  const post5 = {
    user: { name: 'John Doe', avatar: 'avatar.jpg' },
    img_link: beautiful_place_5,
    content: 'Lorem ipsum dolor sit amet...',
    comments: [
      { author: 'Alice', text: 'Great post!' },
      { author: 'Bob', text: 'Nice!' },
    ],
  };

  return (
    <div className="container w-full h-screen mt-4 overflow-y-scroll no-scrollbar">
      <UserPost {...post1} />
      <UserPost {...post2} />
      <UserPost {...post3} />
      <UserPost {...post4} />
      <UserPost {...post5} />
    </div>
  )
}

export default InfiniteScrollList