import { Card, Divider } from 'antd';
import * as React from 'react';
import InputAction from '../InputAction';

export interface Post {
  id?: string
  title: string;
}

interface PostCardType {
  post: Post
  comments: string[]
}

const PostCard: React.FC<PostCardType> = ({post, comments}) => {
  return (
    <Card title={post.title}>
      <ul>
        {comments.map((comment) => (
          <li key={Math.random()}>{comment}</li>
        ))}
      </ul>
      <Divider />
      <InputAction
        inputLabel="Comment"
        buttonLabel="Submit"
        value=""
        changeValue={() => {}}
      />
    </Card>
  );
};

export default PostCard;
