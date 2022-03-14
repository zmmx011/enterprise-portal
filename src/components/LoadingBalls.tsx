import {styled} from '@mui/material/styles';

export const LoadingBalls = styled('div')(() => ({
  left: '50%',
  top: '50%',
  width: '18px',
  height: '18px',
  clear: 'both',
  borderRadius: '50%',
  transformOrigin: 'center center',
  display: 'inline-block',
  position: 'absolute',
  backgroundColor: '#000',
  opacity: '1',
  animation: 'spScaleAlpha 1s infinite linear',
  '&:before, &:after': {
    content: '""',
    width: '18px',
    height: '18px',
    backgroundColor: '#000',
    borderRadius: '50%',
    transformOrigin: 'center center',
    display: 'inline-block',
    position: 'absolute',
    opacity: '0.25',
  },
  '&:before': {
    left: '30px',
    top: '0px',
    animation: 'spScaleAlphaBefore 1s infinite linear',
  },
  '&:after': {
    left: '-30px',
    top: '0px',
    animation: 'spScaleAlphaAfter 1s infinite linear',
  },
  "@keyframes spScaleAlpha": {
    '0%': {opacity: '1',},
    '33%': {opacity: '0.25',},
    '66%': {opacity: '0.25',},
    '100%': {opacity: '1',},
  },
  "@keyframes spScaleAlphaBefore": {
    '0%': {opacity: '0.25',},
    '33%': {opacity: '1',},
    '66%': {opacity: '0.25',},
  },
  "@keyframes spScaleAlphaAfter": {
    '33%': {opacity: '0.25',},
    '66%': {opacity: '1',},
    '100%': {opacity: '0.25',},
  },
}));

