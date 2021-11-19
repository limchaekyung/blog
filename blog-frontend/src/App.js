import React from 'react';
import { Route } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import {Helmet} from 'react-helmet-async';

function App() {
  return (
    <>
    <Helmet>
      <title>COLOG</title>
    </Helmet>
    <Route component={PostListPage} path={['/@:username', '/']} exact />
    <Route component={LoginPage} path="/login" />
    <Route component={RegisterPage} path="/register" />
    <Route component={WritePage} path="/write" />
    <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
}

export default App;
