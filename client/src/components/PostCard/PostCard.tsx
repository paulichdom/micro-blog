import * as React from 'react';
import { Card, Divider } from 'antd';
import CommentCreate from '../CommentCreate';

export interface Post {
  id?: string;
  title: string;
}

interface PostCardType {
  post: Post;
  comments: string[];
}

const PostCard: React.FC<PostCardType> = ({ post, comments }) => {
  return (
    <Card title={post.title}>
      <ul>
        {comments.map((comment) => (
          <li key={Math.random()}>{comment}</li>
        ))}
      </ul>
      <Divider />
      <CommentCreate postId={post.id as string} />
    </Card>
  );
};

export default PostCard;
