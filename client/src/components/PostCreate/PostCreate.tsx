import { useState } from 'react';
import { Typography, Flex } from 'antd';
import InputAction from '../InputAction';

const PostCreate: React.FC = () => {
  const [title, setTitle] = useState('');
  return (
    <Flex vertical>
      <Typography.Title level={3}>Create Post</Typography.Title>
        <InputAction
          inputLabel="Title"
          buttonLabel="Submit"
          buttonVariant='primary'
          value={title}
          changeValue={setTitle}
        />
    </Flex>
  );
};

export default PostCreate;
