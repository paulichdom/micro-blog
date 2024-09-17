import { Card, Divider, List } from 'antd';
import * as React from 'react';
import InputAction from '../InputAction';

const posts = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const comments = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

interface PostCardType {
  title: string;
}

const PostCard: React.FC<PostCardType> = () => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={posts}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            <List
              size="small"
              dataSource={comments}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider />
            <InputAction
              inputLabel="Comment"
              buttonLabel="Submit"
              value=""
              changeValue={() => {}}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PostCard;
