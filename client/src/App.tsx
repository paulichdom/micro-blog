import React from 'react';
import PageLayout from './components/PageLayout';
import PostCreate from './components/PostCreate';
import { Divider } from 'antd';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <PageLayout>
      <PostCreate />
      <Divider />
      <PostList />
    </PageLayout>
  );
};

export default App;
