import React, { useState } from 'react';
import axios from 'axios';
import QuillToolbar from './QuillToolbar';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBlogChange = (text) => {
    setContent(text);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleSaveBlog = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('coverImage', coverImage);

      await axios.post('https://glitch.com/edit/#!/valiant-fine-tin/database/store', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Blog saved successfully!');
      setTitle('');
      setContent('');
      setCoverImage(null);
    } catch (error) {
      console.error(error);
      alert('Failed to save blog. Please try again.');
    }
  };

  return (
    <div>
      <h1>Create Blogs</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={handleTitleChange}
      />
      <QuillToolbar value={content} onChange={handleBlogChange} />
      <input type="file" onChange={handleCoverImageChange} />
      <button onClick={handleSaveBlog}>Save Blog</button>
    </div>
  );
};

export default CreateBlog;
