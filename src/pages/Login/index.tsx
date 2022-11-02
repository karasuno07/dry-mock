import styles from './Login.module.scss';

import * as React from 'react';
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';
import {
   Button,
   Card,
   CardActions,
   CardContent,
   FormControl,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   IconButton,
   Box,
   FormControlLabel,
   Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useForm } from 'react-hook-form';

interface State {
   username: String;
   password: string;
   showPassword: boolean;
}

export default function InputAdornments() {
   const [values, setValues] = React.useState<State>({
      username: '',
      password: '',
      showPassword: false,
   });
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
   };
   const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      });
   };

   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={styles.cardLogin}>
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                     <h1>Sign In</h1>
                     <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-username">Account</InputLabel>
                        <OutlinedInput
                           fullWidth
                           id="username"
                           value={values.username}
                           type="email"
                           {...register('email')}
                           onChange={handleChange('username')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton edge="end">
                                    <AccountCircle />
                                 </IconButton>
                              </InputAdornment>
                           }
                           label="Account Name"
                        />
                        {errors.email && (
                           <p style={{ color: 'red' }}>Your email is not correct form</p>
                        )}
                     </FormControl>
                     <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                           id="password"
                           type={values.showPassword ? 'text' : 'password'}
                           value={values.password}
                           {...register('password', {
                              validate: (value) => value.length > 5,
                           })}
                           onChange={handleChange('password')}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                 >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                 </IconButton>
                              </InputAdornment>
                           }
                           label="Password"
                        />
                        {errors.password && (
                           <p style={{ color: 'red' }}>Your password is less than 5 characters</p>
                        )}
                     </FormControl>
                     <FormControlLabel control={<Checkbox />} label="Remember Me." />
                     <br></br>
                     <Link to={config.routes.register}>No Account ? Register Here</Link>
                  </CardContent>
                  <CardActions style={{ justifyContent: 'center' }}>
                     <Button variant="contained" size="small" type="submit" onClick={handleClick}>
                        Login
                     </Button>
                  </CardActions>
               </Box>
            </Card>
         </form>
      </>
   );
}
