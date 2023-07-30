import React, { useState } from 'react';
import QuillToolbar from './QuillToolbar';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const handleBlogChange = (text) => {
    setContent(text);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleSaveBlog = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('coverImage', coverImage);

      const response = await fetch('/apiBlog/server', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Blog saved successfully!');
      } else {
        alert('Failed to save the blog.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to save the blog.');
    }
  };

  return (
    <form action="http://loclhost:4000/server" method='post'  encType='multipart/form-data'>
    <div>
      <h1>Create Blogs</h1>
      <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <QuillToolbar value={content} onChange={handleBlogChange} />
      <input type="file" accept="image/*" onChange={handleCoverImageChange} />
      <button onClick={handleSaveBlog}>Save Blog</button>
    </div>
    </form>
  );
};

export default CreateBlog;
