import React from 'react';
import MiniBanner from './components/MiniBanner';
import Banner from './components/Banner';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <MiniBanner />
      <Banner />
    </Container>
  );
};

export default App;
