import * as React from 'react';
import { Card, Divider } from 'antd';
import CommentCreate from '../CommentCreate';
import CommentList from '../CommentList';
import useSWR from 'swr';
import axios from 'axios';
import { getCommentsURL } from '../../utils';

export interface Post {
  id?: string;
  title: string;
}

export interface Comment {
  id: string;
  content: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { isLoading, data } = useSWR<Comment[]>(
    getCommentsURL(post.id as string),
    fetcher
  );

  return (
    <Card loading={isLoading} title={post.title}>
      {!isLoading && <CommentList comments={data || []} />}
      <Divider />
      <CommentCreate postId={post.id as string} />
    </Card>
  );
};

export default PostCard;
