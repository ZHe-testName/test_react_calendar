import { Layout } from 'antd';
import React, { FC } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <Layout>
      <div className="App">
        <Navbar />

        <Layout.Content>
          <AppRouter/>
        </Layout.Content>
      </div>
    </Layout>
  );
}

export default App;
