import PostReaction from './PostReaction';
import PostComments from './PostComments';
import React from 'react';;


const Posts = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt="Travel" />
      <p>{post.description}</p>
      <PostReaction postId={post.id} />
      <PostComments postId={post.id} />
    </div>
  );
};

export default Posts;
