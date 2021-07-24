// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import PostForm from './Components/PostForm';
// eslint-disable-next-line
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      {/* <PostList/> */}
      <PostForm/>
    </div>
  );
}

export default App;
