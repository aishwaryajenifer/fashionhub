import React, { useState } from 'react';
import axios from 'axios';
import ColorAnalysis from './ColorAnalysis';

function PhotoUpload() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleImageUpload = async (event) => {
    try {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('http://localhost:8080/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setAnalysis(response.data);
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Server responded with error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // No response was received
            console.error('No response received:', error.request);
        } else {
            // Error in setting up the request
            console.error('Error message:', error.message);
        }
    }
};


  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
      {analysis && <ColorAnalysis colors={analysis.colors} palette={analysis.palette} />}
    </div>
  );
}

export default PhotoUpload;
