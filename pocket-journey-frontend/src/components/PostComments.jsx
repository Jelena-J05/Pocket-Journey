import React, { useState } from 'react';

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    // Aggiungere il commento
  };

  return (
    <div>
      {comments.map(comment => <p key={comment.id}>{comment.text}</p>)}
      <button onClick={() => addComment("Nuovo Commento")}>Aggiungi Commento</button>
    </div>
  );
};

export default PostComments;
