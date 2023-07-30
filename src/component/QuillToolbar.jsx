import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillToolbar = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'], // blocks
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }], // lists
      [{ indent: '-1' }, { indent: '+1' }], // indent
      [{ color: [] }, { background: [] }], // dropdown with defaults
      [{ align: [] }], // text align
      ['link', 'image'], // link and image
      ['clean'], // remove formatting
    ],
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      placeholder="Write your blog here..."
    />
  );
};

export default QuillToolbar;
