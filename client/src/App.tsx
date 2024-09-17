import React from 'react';
import PageLayout from './components/PageLayout';
import PostCreate from './components/PostCreate';
import { Divider } from 'antd';
import PostCard from './components/PostCard';


const App: React.FC = () => {
  return (
    <PageLayout>
      <PostCreate />
      <Divider />
      <PostCard title='Post title' />
    </PageLayout>
  );
};

export default App;
