import React, { useState } from 'react';
import './Community.css';

const Community = () => {
  const [posts, setPosts] = useState([
    // Initial dummy posts
    { id: 1, user: 'Zain', content: 'What are the best ways to reduce plastic waste?' },
    { id: 2, user: 'Bilal', content: 'How can we conserve water at home?' }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim() === '') return;
    setPosts([...posts, { id: posts.length + 1, user: 'You', content: newPost }]);
    setNewPost('');
  };

  return (
    <div className="community">
      <h2>Community Forum</h2>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.user}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <div className="new-post">
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </div>
  );
};

export default Community;
