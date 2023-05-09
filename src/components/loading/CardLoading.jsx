import React from 'react';
import { Card,Grid,Skeleton, Avatar, Button, Typography, CardMedia, CardContent, CardActions } from '@mui/material';

const CardLoading = () => {
  return (
    <Grid spacing={2} container> 
    {
                Array.from({ length : 4}).map((_,id) =>(
                  <Grid key={`loading-${id}`} item xs={12} md={4} lg={3}>
                  <Card>
                    <CardMedia>
                    <Skeleton variant='rectangular' width={'100%'} height={180} animation="wave">
                      <Avatar />
                      </Skeleton>
                    </CardMedia>
              
                  <CardContent>
                      <Skeleton width={Math.ceil(Math.random() )* 100} animation="wave"/>
                      <Typography>
                      <Skeleton animation="wave" height={120} />
                      </Typography>
                      <Skeleton animation="wave" width={'50%'} height={45}>
                        <Button />
                      </Skeleton>
                      </CardContent>
              
                  </Card>
                  </Grid>
                ))
    }
   
    </Grid>
  )
}

export default CardLoading