import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Upload Your Video
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Video Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          component="label"
        >
          Upload Video
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {file && <Typography variant="body1" sx={{ mt: 2 }}>{file.name}</Typography>}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
      </Box>
    </Container>
  );
};

export default Upload;
