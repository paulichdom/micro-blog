import { List } from 'antd';
import PostCard, { Post } from '../PostCard';

const comments = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

interface PostListProps {
  isLoading: boolean;
  posts: Post[] | undefined;
}

const PostList: React.FC<PostListProps> = ({ isLoading, posts }) => {
  return (
    <List
      loading={isLoading}
      grid={{ gutter: 16, column: 2 }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <PostCard post={post} comments={comments} />
        </List.Item>
      )}
    />
  );
};

export default PostList;
