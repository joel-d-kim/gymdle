import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" component="div" gutterBottom>
        Welcome to Gymdle
      </Typography>
      <Typography variant="body1">
        Upload your lifting videos and let others guess your lift stats!
      </Typography>
    </Container>
  );
};

export default Home;
