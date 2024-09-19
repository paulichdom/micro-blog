import * as React from 'react';
import { Comment } from '../PostCard';

const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  console.log({ comments });
  return (
    <ul>
      {comments.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
