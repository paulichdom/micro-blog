import * as React from 'react';
import { Button, Card, Divider, Flex, Form, Input, Typography } from 'antd';

export interface Post {
  id?: string;
  title: string;
}

interface PostCardType {
  post: Post;
  comments: string[];
}

interface FieldType {
  title?: string;
}

const PostCard: React.FC<PostCardType> = ({ post, comments }) => {
  const [value, setValue] = React.useState('');
  const [form] = Form.useForm();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onFinish = () => {};
  return (
    <Card title={post.title}>
      <ul>
        {comments.map((comment) => (
          <li key={Math.random()}>{comment}</li>
        ))}
      </ul>
      <Divider />
      <Form form={form} name="create-comment" onFinish={onFinish}>
        <Flex gap="small" align="start" vertical>
          <Typography.Title level={5} style={{ marginBottom: 0 }}>
            Comment
          </Typography.Title>
          <Form.Item<FieldType> name="title" rules={[{ required: true }]}>
            <Input value={value} onChange={handleInputChange} />
          </Form.Item>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default PostCard;
