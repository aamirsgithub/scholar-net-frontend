import { styled } from '@mui/system';

export const PhotoGalleryContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden'
});

export const GalleryImage = styled('img')({
  width: '100%',
  height: '100%',
//   objectFit: 'cover',
  transition: 'opacity 1s ease-in-out',
});

export const GalleryButton = styled('button')({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  fontSize: '18px', 
  borderRadius: '50%', 
  opacity: 0.5,
  transition: 'opacity 0.3s, background-color 0.3s',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  }
});

export const LeftButton = styled(GalleryButton)({
  left: '10px'
});

export const RightButton = styled(GalleryButton)({
  right: '10px'
});
