import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  // headerFontFamily: ['Montserrat', 'sans-serif'],
  headerFontFamily: [
    'Avenir Next',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  headerColor: '#769cac',
  headerWeight: 900,
  bodyFontFamily: [
    // 'Avenir',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyWeight: 200,
  googleFonts: [
    {
      name: 'Covered+By+Your+Grace',
      styles: [
        '400',
      ],
    },
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
