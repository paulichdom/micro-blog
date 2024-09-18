import { Card, Divider } from 'antd';
import * as React from 'react';
import InputAction from '../InputAction';

interface Post {
  title: string;
  comments: string[]
}

interface PostCardType {
  post: Post
}

const PostCard: React.FC<PostCardType> = ({post}) => {
  return (
    <Card title={post.title}>
      <ul>
        {post.comments.map((comment) => (
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
