import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Container, Tooltip } from '@mui/material';
import styles from '../CardProduct/CardProduct.module.scss';

function CardProduct() {
   const dataTech = [
      {
         id: 1,
         title: 'SamSung Galaxy Z FLip m_i_2022',
         img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg',
         price: 2000000,
      },
      {
         id: 2,
         title: 'Iphone 14 Pro',
         img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
         price: 2000000,
      },
      {
         id: 3,
         title: 'Vivo Y15S 2021',
         img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
         price: 2000000,
      },
      {
         id: 4,
         title: 'Xiaomi Redmi Note 11 Black',
         img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
         price: 2000000,
      },
      {
         id: 5,
         title: 'Oppo a57',
         img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
         price: 2000000,
      },
      {
         id: 6,
         title: 'Nokia G21',
         img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
         price: 2000000,
      },
      {
         id: 7,
         title: 'Realme 9 Pro Plus 5G Blue',
         img: 'https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg',
         price: 2000000,
      },
      {
         id: 8,
         title: 'Itel l6502',
         img: 'https://cdn.tgdd.vn/Products/Images/42/251897/itel-l6502-den-600x600.jpg',
         price: 2000000,
      },
   ];
   return (
      <>
         <Container className={styles.cardEdit}>
            <Grid container spacing={4}>
               {dataTech.map((itemCard: any) => (
                  <Grid item xs={3} key={itemCard.id}>
                     <Card className={styles.productCard} sx={{ maxWidth: 400 }}>
                        <h1 className={styles.idProduct}>{itemCard.id}</h1>
                        <CardActionArea>
                           <CardMedia
                              className={styles.mediaImg}
                              component="img"
                              height="350px"
                              image={itemCard.img}
                              alt="imagePhone"
                           />
                           <CardContent>
                              <Tooltip disableFocusListener title={itemCard.title} placement="top-end" arrow>
                                 <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    align="center"
                                    color="#6ae021"
                                    height={38}
                                    overflow="hidden"
                                 >
                                    {itemCard.title}
                                 </Typography>
                              </Tooltip>

                              <Typography variant="body2" color="text.warning" align="center">
                                 Price: {itemCard.price}
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                        <CardActions style={{ justifyContent: 'center' }}>
                           <Button variant="contained" size="small" className={styles.btnCard}>
                              Watch more
                           </Button>
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </>
   );
}

export default CardProduct;
