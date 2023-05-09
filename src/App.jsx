import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container,CssBaseline } from '@mui/material';
import { Navbar,ProductsCom, Footer } from './components';

const theme = createTheme();
function App() {
 
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
   <Navbar />
   
   <Container sx={{py:8}}>
    <ProductsCom text={'our products'} />
   </Container>

    <Footer />
   </ThemeProvider>
  )
}

export default App
