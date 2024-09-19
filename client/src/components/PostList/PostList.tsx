import { List } from 'antd';
import PostCard, { Post } from '../PostCard';

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
          <PostCard post={post} />
        </List.Item>
      )}
    />
  );
};

export default PostList;
