import { createTheme } from '@mui/material/styles'
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme'

// Custom theme: Colors
const themeColors = {
  color: {
    primary: '#19A7CE',
    secondary: '#146C94',
    error: '#FF4D4F',
    lightSilver: '#BFBFBF',
  },
} as const

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    primary: {
      light: '#19A7CE',
      main: themeColors.color.primary,
      contrastText: '#000000',
    },
    secondary: {
      main: themeColors.color.secondary,
      contrastText: '#ffffff',
    },
    error: {
      main: themeColors.color.error,
    },
    grey: {
      200: themeColors.color.lightSilver,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 14,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            borderRadius: '2px',
            '& .MuiOutlinedInput-input': {
              padding: '7px 12px',
              borderRadius: '2px',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.6,
              color: themeColors.color.secondary,
              fontFamily: 'Montserrat',
              '&::placeholder': {
                color: themeColors.color.lightSilver,
                opacity: 1,
              },
              '&::-ms-input-placeholder': {
                color: themeColors.color.lightSilver,
                opacity: 1,
              },
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          padding: '4px 8px',
          borderRadius: '2px',
          textTransform: 'inherit',
          fontSize: '14px',
          '&.MuiButton-containedPrimary': {
            color: '#ffffff',
            backgroundColor: themeColors.color.primary,
            '&:hover': {
              backgroundColor: '#19A7CE',
            },
          },
        },
      },
    },
  },
}

// Create theme
export const theme = createTheme({ ...themeColors, ...themeOptions })
