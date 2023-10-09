import React, { useState } from 'react';
import axios from 'axios'

function ImageUpload() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    console.log(formData)
    debugger
    const response = await axios.post('http://localhost:3000/upload', formData);
    console.log(response)
  };

  return (
    <div>
      <input type="file" name='image' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
  }

export default ImageUpload
