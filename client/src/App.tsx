import React from 'react';
import PageLayout from './components/PageLayout';
import PostCreate from './components/PostCreate';
import { Divider } from 'antd';
import PostList from './components/PostList';
import useSWR from 'swr';
import axios from 'axios';
import { Post } from './components/PostCard';

const POSTS_URL = 'http://localhost:4002/posts';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const App: React.FC = () => {
  const { isLoading, data: posts } = useSWR<Post[]>(POSTS_URL, fetcher);
  console.log({posts})
  return (
    <PageLayout>
      <PostCreate />
      <Divider />
      <PostList isLoading={isLoading} posts={posts} />
    </PageLayout>
  );
};

export default App;
