import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const MiniBannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  width: '467px',
  height: '206px',
}));

const BackgroundImage = styled('img')({
  position: 'absolute',
  top: '35px',
  left: '5px',
  width: '467px',
  height: '206px',
  objectFit: 'cover',
  zIndex: -1,
  borderRadius: '8px',
});

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',
  color: '#F1F2FF',
  fontFamily: 'Inter sans-serif'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#7c7afa',
  fontSize: '12px',
  fontWeight: 600,
  width: '98px',
  height: '40px',
  textTransform: 'none',
  padding: "6px 10px 6px 10px",
  boxShadow: 'none',
  marginTop: theme.spacing(1),
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const MiniBanner: React.FC = () => {
  return (
    <MiniBannerContainer>
      <BackgroundImage src="2.png" alt="Background" />
      <ContentBox>
        <Typography variant="h3" sx={{ fontSize: '11px', fontWeight: 600, marginBottom: '4px', marginTop: '12px', letterSpacing: '0.05em'}}>TEST SERVICE</Typography>
        <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', width: '280px'}}>
          Lorem sit and dolor consoector lorlepspsm!
        </Typography>
        <StyledButton variant="contained">
          Learn more
        </StyledButton>
      </ContentBox>
    </MiniBannerContainer>
  );
};

export default MiniBanner;
