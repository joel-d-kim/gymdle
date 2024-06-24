import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Game = () => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    // Handle guess submission logic
    setResult(`Your guess: ${guess}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Guess the Lift Stats
      </Typography>
      <Box component="form" onSubmit={handleGuessSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Your Guess"
          fullWidth
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">Submit Guess</Button>
      </Box>
      {result && <Typography variant="body1" sx={{ mt: 2 }}>{result}</Typography>}
    </Container>
  );
};

export default Game;
