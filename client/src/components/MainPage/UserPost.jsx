import React from 'react'

// Header that contains avatar, username
const UserHeader = ({ user }) => {
  return (
      <div className="flex items-center mb-2">
          <img className="w-8 h-8 rounded-full mr-2" src={user.avatar} alt={`${user.name}'s avatar`} />
          <span className="font-bold">{user.name}</span>
      </div>
  )
}

const PostCreation = ({ img_link }) => {
  return (
    <img className = "w-8/12 h-8/12" src={img_link} />
  )
}

// The displayed content (img, video, ...)
const PostContent = ({ content }) => {
  return (
      <div className="mb-2">{content}</div>
  )
}

// List of the comments
function Comments({ comments }) {
  return (
    <div className="space-y-2">
      {comments.map((comment, index) => (
        <div key={index} className="flex items-center">
          <span className="font-bold mr-2">{comment.author}</span>
          <p className="text-gray-700">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

// Vertical list type card
const UserPost = ({ user, img_link, content, comments }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      <UserHeader user={user} />
      <PostCreation img_link={img_link} />
      <PostContent content={content} />
      <Comments comments={comments} />
    </div>
  )
}

export default UserPost