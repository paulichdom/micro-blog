import React from 'react';
import PageLayout from './components/PageLayout';
import PostCreate from './components/PostCreate';
import { Divider } from 'antd';


const App: React.FC = () => {
  return (
    <PageLayout>
      <PostCreate />
      <Divider />
    </PageLayout>
  );
};

export default App;
