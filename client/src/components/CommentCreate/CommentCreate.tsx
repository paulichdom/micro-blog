import { Button, Flex, Form, FormProps, Input, Typography } from 'antd';
import axios from 'axios';
import * as React from 'react';

interface FieldType {
  content?: string;
}

interface CommentCreateProps {
  postId: string;
}

const getCommentsURL = (postId: string) =>
  `http://localhost:4001/posts/${postId}/comments`;

const CommentCreate: React.FC<CommentCreateProps> = ({ postId }) => {
  const [content, setContent] = React.useState('');
  const [form] = Form.useForm();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    await axios.post(getCommentsURL(postId), {
      content: values.content,
    });

    form.resetFields();
  };

  return (
    <Form form={form} name="create-comment" onFinish={onFinish}>
      <Flex gap="small" align="start" vertical>
        <Typography.Title level={5} style={{ marginBottom: 0 }}>
          Comment
        </Typography.Title>
        <Form.Item<FieldType> name="content" rules={[{ required: true }]}>
          <Input value={content} onChange={handleInputChange} />
        </Form.Item>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );
};

export default CommentCreate;
