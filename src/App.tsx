import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useDispatchedActions } from './hooks/useDispatchedActions';
import { UserType } from './models/IUser';

const App: FC = () => {
  const {setIsAuth, setUser} = useDispatchedActions();

  useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true);

      setUser({username : localStorage.getItem('user' || '')} as UserType);
    };
  }, []);

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
