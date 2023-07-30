import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs from the backend
    fetch('/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteBlog = async (id) => {
    try {
      // Delete the selected blog from the backend
      const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });

      if (response.ok) {
        // Update the 'blogs' state to remove the deleted blog from the view
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        alert('Blog deleted successfully!');
      } else {
        alert('Failed to delete the blog.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete the blog.');
    }
  };

  return (
    <div>
      <h1>View Blogs</h1>
      <nav>
        <Link to="/">Go back to Create Blogs</Link>
      </nav>
      {blogs.length > 0 ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <img src={blog.coverImage} alt={blog.title} />
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default ViewBlogs;
