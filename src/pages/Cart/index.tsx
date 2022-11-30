import { Add, Delete, Remove } from '@mui/icons-material';
import {
   Box,
   Button,
   ButtonGroup,
   Card,
   CardContent,
   CardMedia,
   Divider,
   Grid,
   IconButton,
   Stack,
   styled,
   TextField,
   Typography,
} from '@mui/material';
import styles from './Cart.module.scss';

const Img = styled('img')({
   margin: 'auto',
   maxWidth: '100%',
   maxHeight: '100%',
});

function Cart(): JSX.Element {
   return (
      <>
         <Typography fontSize={55} textAlign="center" margin={4}>
            Your Shopping Cart
         </Typography>

         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} pb={2}>
               <Grid item xs={10} maxHeight={500} overflow="scroll">
                  <Typography fontSize={25} textAlign="center" margin={2}>
                     Cart Detail:
                  </Typography>
                  <Stack spacing={1}>
                     <Card className={styles.cartProduct}>
                        <CardMedia className={styles.imgCart}>
                           <Img
                              alt="complex"
                              src="https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg"
                           />
                        </CardMedia>
                        <CardContent className={styles.infoCart}>
                           <Typography fontSize={32} textAlign="left">
                              Product 1
                           </Typography>
                           <ButtonGroup>
                              <Box>
                                 <Grid>
                                    <Button variant="contained" color="error">
                                       <Delete />
                                    </Button>
                                    <IconButton>
                                       <Remove />
                                    </IconButton>
                                    <TextField
                                       InputProps={{ inputProps: { min: 0, max: 20 } }}
                                       size="small"
                                       type={'number'}
                                       className={styles.boxCount}
                                    />
                                    <IconButton>
                                       <Add />
                                    </IconButton>
                                 </Grid>
                              </Box>
                           </ButtonGroup>
                        </CardContent>
                        <CardContent>
                           <Typography fontSize={32} textAlign="center">
                              Total
                           </Typography>
                           <Typography fontSize={26} className={styles.totalPrice}>
                              $19.00
                           </Typography>
                        </CardContent>
                     </Card>
                     <Card className={styles.cartProduct}>
                        <CardMedia className={styles.imgCart}>
                           <Img
                              alt="complex"
                              src="https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg"
                           />
                        </CardMedia>
                        <CardContent className={styles.infoCart}>
                           <Typography fontSize={32} textAlign="left">
                              Product 1
                           </Typography>
                           <ButtonGroup>
                              <Box>
                                 <Grid>
                                    <Button variant="contained" color="error">
                                       <Delete />
                                    </Button>
                                    <IconButton>
                                       <Remove />
                                    </IconButton>
                                    <TextField
                                       InputProps={{ inputProps: { min: 0, max: 20 } }}
                                       size="small"
                                       type={'number'}
                                       className={styles.boxCount}
                                    />
                                    <IconButton>
                                       <Add />
                                    </IconButton>
                                 </Grid>
                              </Box>
                           </ButtonGroup>
                        </CardContent>
                        <CardContent>
                           <Typography fontSize={32} textAlign="center">
                              Total
                           </Typography>
                           <Typography fontSize={26} className={styles.totalPrice}>
                              $19.00
                           </Typography>
                        </CardContent>
                     </Card>
                     <Card className={styles.cartProduct}>
                        <CardMedia className={styles.imgCart}>
                           <Img
                              alt="complex"
                              src="https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg"
                           />
                        </CardMedia>
                        <CardContent className={styles.infoCart}>
                           <Typography fontSize={32} textAlign="left">
                              Product 1
                           </Typography>
                           <ButtonGroup>
                              <Box>
                                 <Grid>
                                    <Button variant="contained" color="error">
                                       <Delete />
                                    </Button>
                                    <IconButton>
                                       <Remove />
                                    </IconButton>
                                    <TextField
                                       InputProps={{ inputProps: { min: 0, max: 20 } }}
                                       size="small"
                                       type={'number'}
                                       className={styles.boxCount}
                                    />
                                    <IconButton>
                                       <Add />
                                    </IconButton>
                                 </Grid>
                              </Box>
                           </ButtonGroup>
                        </CardContent>
                        <CardContent>
                           <Typography fontSize={32} textAlign="center">
                              Total
                           </Typography>
                           <Typography fontSize={26} className={styles.totalPrice}>
                              $19.00
                           </Typography>
                        </CardContent>
                     </Card>
                     <Card className={styles.cartProduct}>
                        <CardMedia className={styles.imgCart}>
                           <Img
                              alt="complex"
                              src="https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg"
                           />
                        </CardMedia>
                        <CardContent className={styles.infoCart}>
                           <Typography fontSize={32} textAlign="left">
                              Product 1
                           </Typography>
                           <ButtonGroup>
                              <Box>
                                 <Grid>
                                    <Button variant="contained" color="error">
                                       <Delete />
                                    </Button>
                                    <IconButton>
                                       <Remove />
                                    </IconButton>
                                    <TextField
                                       InputProps={{ inputProps: { min: 0, max: 20 } }}
                                       size="small"
                                       type={'number'}
                                       className={styles.boxCount}
                                    />
                                    <IconButton>
                                       <Add />
                                    </IconButton>
                                 </Grid>
                              </Box>
                           </ButtonGroup>
                        </CardContent>
                        <CardContent>
                           <Typography fontSize={32} textAlign="center">
                              Total
                           </Typography>
                           <Typography fontSize={26} className={styles.totalPrice}>
                              $19.00
                           </Typography>
                        </CardContent>
                     </Card>
                  </Stack>
               </Grid>
               <Grid item xs={6}>
                  <Card className={styles.cardPay}>
                     <Typography className={styles.cardPayHead}>Your Total Cart</Typography>
                     <Divider />
                     <Typography className={styles.cardText}>Subtotal: $76</Typography>
                     <Typography className={styles.cardText}>Number of product: 4</Typography>
                     <Typography className={styles.cardText}>Promo Code: 1122</Typography>
                     <Divider />
                     <Typography className={styles.cardText}>Total: $70</Typography>
                     <Divider />
                     <Box textAlign="center">
                        <Button
                           style={{ justifyContent: 'center' }}
                           variant="contained"
                           color="primary"
                           fullWidth
                        >
                           Check Out
                        </Button>
                     </Box>
                  </Card>
               </Grid>
            </Grid>
         </Box>
      </>
   );
}

export default Cart;
