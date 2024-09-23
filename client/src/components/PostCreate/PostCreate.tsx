import { useState } from 'react';
import { Typography, Flex, Form, FormProps, Input, Button } from 'antd';
import { useSWRConfig } from 'swr';
import axios from 'axios';

export const POSTS_URL = 'http://localhost:4002/posts';

interface FieldType {
  title?: string;
}

const PostCreate: React.FC = () => {
  const { mutate } = useSWRConfig();
  const [form] = Form.useForm();
  const [value, setValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    await axios.post('http://localhost:4000/posts', {
      title: values.title,
    });

    form.resetFields();
    void mutate(POSTS_URL);
  };

  return (
    <Flex vertical>
      <Typography.Title level={3}>Create Post</Typography.Title>
      <Form form={form} name="create-post" onFinish={onFinish}>
        <Flex gap="small" align="start" vertical>
          <Typography.Title level={5} style={{ marginBottom: 0 }}>
            Title
          </Typography.Title>
          <Form.Item<FieldType> name="title" rules={[{ required: true }]}>
            <Input value={value} onChange={handleInputChange} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};

export default PostCreate;
