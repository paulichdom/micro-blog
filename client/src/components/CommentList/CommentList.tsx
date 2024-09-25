import * as React from 'react';
import { Comment, ModerationStatus } from '../PostCard/PostCard';

const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  const handleContentModeration = (
    content: string,
    status: ModerationStatus
  ) => {
    switch (status) {
      case 'approved':
        return content;
      case 'pending':
        return 'This comment is awaiting moderation';
      case 'rejected':
        return 'This comment has been rejected';
      default:
        return 'Unknown comment status';
    }
  };
  
  return (
    <ul>
      {comments.map(({ id, content, status }) => (
        <li key={id}>{handleContentModeration(content, status)}</li>
      ))}
    </ul>
  );
};

export default CommentList;
