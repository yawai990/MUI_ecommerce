import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardLoading from './loading/CardLoading';
import { Card,Box, CardActions,Pagination, CardContent, CardMedia, Grid,Button, Typography} from '@mui/material';
import * as api from '../api';

const ProductsCom = ({ text }) => {
  const [ loading, setLoading ] = useState(true);
  const [ products, setProducts ] = useState({});

  const getProducts = async() => {
    setLoading(true)
    await api.getProducts()
    .then(resp => {
      if(resp.status === 200 && resp.statusText === 'OK'){
        setProducts(resp.data)
        setLoading(false)
      };
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getProducts();
  }, []);


  if(loading){
    return <CardLoading />
  }
  return (
    <>
    <Typography variant='h4' textTransform={'capitalize'}  gutterBottom>{text}</Typography>
    <Grid spacing={2} container>
        {
         products.products?.map((p,id) =>(
         <Grid key={p._id}  item xs={12} md={4} lg={3}>
              <AnimatePresence mode='wait'>
              <motion.div initial={{ opacity:0}} 
              animate={{ y : [20,0], opacity : 1, transition:{ delay : 0.08 * id}}}>
            <Card sx={{ maxWidth:320, minHeight:345}}>

              <motion.div whileHover={{ scale : 1.1}} 
              transition={{ 
                type : 'spring', 
                stiffness: 400, 
                damping: 10,
              }}
                >

            <CardMedia  
            style={{ cursor :'pointer'}}
            sx={{ height: 190, objectFit:'contained' }}
              image={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1675503460/${p.image[0].path}`}
              title={p.productName}
            /> 
              </motion.div>
            <CardContent sx={{ textTransform:'capitalize'}}>
              <Typography variant='body2'>{p.productName}</Typography>
              <Typography sx={{
                textDecoration : p.discount > 0 && 'line-through',
                color :p.discount > 0 && 'red'
              }} variant='body2' fontSize={p.discount > 0 ? 16:20}>$ {p.price}</Typography>

                {
                  p.discount > 0 && 
               <Typography variant='body2' fontSize={20}>$ {p.price - (p.discount * p.price /100)}</Typography>
                }
              
  
              {/* <Typography variant='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ipsam!</Typography> */}
            </CardContent>
            <CardActions>
            <Button variant='outlined'>Add To Cart</Button>
            </CardActions>
          </Card>
        </motion.div>
        </AnimatePresence>
          </Grid>
         ))
        }
    </Grid>

    {/* pagination */}
    <Box display={'flex'} justifyContent={'center'} mt={4}>
    <Pagination count={products.pagination} variant='text' size='large' color='primary' onChange={e=> console.log(e.target.innerText)} />
    </Box>
    </>
  )
}

export default ProductsCom