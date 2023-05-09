import React from 'react';
import { AppBar,Toolbar,Button,Badge,Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <AppBar position='relative'>
     <Toolbar>

          <Toolbar sx={{ flexGrow:1 }} component={'div'}>

          <Typography variant='h5'>Shoppy</Typography>

          <Box ml={5}>
               {
                    ['home','promotions','our services','about us'].map((link,idx)=>(
                         <Button color='inherit' key={`${link}-${idx}`}>{link}</Button>
                    ))
               }
          </Box>
          </Toolbar>

     <Typography component='div'>
          {
          ['sign in','login'].map((btn,idx) =>(
               <Button color='inherit' key={`${btn}-${idx}`}>{btn}</Button>
          ))
          }
     <Button color="inherit">
          <Badge badgeContent={3} color='secondary'>
      <ShoppingCartIcon />
          </Badge>
     </Button>
     </Typography>

     </Toolbar>
    </AppBar>
  )
}

export default Navbar