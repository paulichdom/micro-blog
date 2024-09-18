import { List } from 'antd';
import PostCard from '../PostCard';

const comments = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const posts = [
  {
    title: 'Title 1',
    comments,
  },
  {
    title: 'Title 2',
    comments,
  },
  {
    title: 'Title 3',
    comments,
  },
  {
    title: 'Title 4',
    comments,
  },
];

function PostList() {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <PostCard post={post} />
        </List.Item>
      )}
    />
  );
}

export default PostList;
