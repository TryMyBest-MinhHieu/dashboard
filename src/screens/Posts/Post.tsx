'use client';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const buttons = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
function Post() {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const getPosts = async () => {
      const {data} = await axios.get(apiEndPoint);
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <div>
      {buttons.map((btn, index) => {
        <button key={index}>{btn}</button>;
      })}

      {posts.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
