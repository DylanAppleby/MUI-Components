import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  color: '#fff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  width: '1326px',
  height: '106px',
}));

const BackgroundImage = styled('img')({
  position: 'absolute',
  top: '20px',
  left: '0px',
  width: '1326px',
  height: '106px',
  objectFit: 'cover',
  zIndex: -1,
  borderRadius: '8px',
});

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  color: '#F1F2FF',
  fontFamily: 'Inter, sans-serif',
  paddingLeft: '10px'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#7c7afa',
  fontSize: '12px',
  fontWeight: 600,
  width: '98px',
  height: '40px',
  textTransform: 'none',
  padding: '6px 10px',
  marginRight: '30px',
  marginTop: '5px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BackgroundImage src="1.png" alt="Background" />
      <ContentBox>
        <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', marginTop: '10px'}}>
          Introducing: Test Service
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 400, letterSpacing: '0.05em' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit donec vitae faucibus.
        </Typography>
      </ContentBox>
      <StyledButton variant="contained">
        Learn more
      </StyledButton>
    </BannerContainer>
  );
};

export default Banner;
