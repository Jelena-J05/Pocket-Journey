import React from 'react';

const PostReaction = ({ postId }) => {
  const addReaction = (reactionType) => {
    // Aggiungere una reazione al post 
  };

  return (
    <div>
      <button onClick={() => addReaction("like")}>Like</button>
      <button onClick={() => addReaction("love")}>Love</button>
      {/* Altri bottoni*/}
    </div>
  );
};

export default PostReaction;
