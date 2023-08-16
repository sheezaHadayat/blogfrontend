import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://glitch.com/edit/#!/valiant-fine-tin/database/retrieve');
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch blogs. Please try again.');
    }
  };

  // const handleDeleteBlog = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/database/store${id}`);
  //     fetchBlogs(); // Refresh the blogs list after deletion
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to delete blog. Please try again.');
  //   }
  // };

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
              <h2>{blog.title}</h2>
              {blog.cover_image && (
                <img
                  src={`https://glitch.com/edit/#!/valiant-fine-tin/uploads/${blog.cover_image}`}
                  alt="Blog Cover"
                  style={{ maxWidth: '300px' }}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              {/* <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button> */}
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
