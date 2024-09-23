import * as React from 'react';
import { Card, Divider } from 'antd';
import CommentCreate from '../CommentCreate';
import CommentList from '../CommentList';

export interface Post {
  id?: string;
  title: string;
  comments: Comment[]
}

export interface Comment {
  id: string;
  content: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Card title={post.title}>
      <CommentList comments={post.comments || []} />
      <Divider />
      <CommentCreate postId={post.id as string} />
    </Card>
  );
};

export default PostCard;
