import styles from './Register.module.scss';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from 'react';
import {AccountCircle, LockOutlined } from '@mui/icons-material';
import {
   Button,
   Card,
   CardActions,
   CardContent,
   FormControl,
   Box,
   FormControlLabel,
   Checkbox,
   FormHelperText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Controller, useController, useForm } from 'react-hook-form';

interface FormValues {
   username: string;
   password: string;
   confirmPassword: string;
}

const defaultValues: FormValues = {
   username: '',
   password: '',
   confirmPassword: '',
};

interface State {
   username: string;
   password: string;
   confirmPassword: string;
}

const SignupSchema = yup.object().shape({
   username: yup.string().required('User name is required').email('Email is not valid form(Ex: abc@gmail.com)'),
   password: yup.string().required('Password is required').min(5, 'Password must be more than 5 characters')
   .max(25, 'Password must be less than 25 characters'),
   confirmPassword: yup.string().required('Please confirm your password').oneOf([yup.ref('password')], 'Your passwords do not match.'),

 });

export default function Login() {
   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({ defaultValues: defaultValues, resolver: yupResolver(SignupSchema)} );

   const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
   };

   const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // setValues({ ...values, [prop]: event.target.value });
   };

   return (
      <div style={{ display:'flex', justifyContent:'center', verticalAlign:'center' }}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={styles.cardRegister}>
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                     <h1>Sign Up</h1>
                     <FormControl fullWidth>
                        <Controller
                           name="username"
                           control={control}
                           render={({ field }) => (
                              <>
                                 <span className={styles.textInput}>
                                    <i><AccountCircle /></i>
                                    Account
                                 </span>
                                 <input  {...field} />
                                 {errors.username && <p className={styles.errMess}>{errors.username.message}</p>}
                                 <FormHelperText>Please enter your username</FormHelperText>
                              </>
                           )}
                        />
                        
                     </FormControl>

                     <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                        <Controller
                           name="password"
                           
                           control={control}
                           render={({ field }) => (
                              <>
                                 <span className={styles.textInput}>
                                    <LockOutlined />
                                    Password
                                 </span>
                                 <input type="password" {...field} />
                                 {errors.password && <p className={styles.errMess}>{errors.password.message}</p>}
                                 <FormHelperText>Please enter your password</FormHelperText>
                              </>
                           )}
                        />
                     </FormControl>

                     <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
                        <Controller
                           name="confirmPassword"
                           control={control}
                           render={({ field }) => (
                              <>
                                 <span className={styles.textInput}>
                                    <LockOutlined />
                                    Confirm Password
                                 </span>
                                 <input type="password" {...field} />
                                 {errors.confirmPassword && <p className={styles.errMess}>{errors.confirmPassword.message}</p>}
                                 <FormHelperText>Please confirm your password</FormHelperText>
                              </>
                           )}
                        />
                     </FormControl>

                     <FormControlLabel control={<Checkbox />} label="Accept term!" />
                     <br></br>
                     <Link className={styles.link} to={config.routes.login}>Already have account sign in here</Link><br/>
                  </CardContent>
                  <CardActions style={{ justifyContent: 'center' }}>
                     <Button variant="contained" size="medium" type="submit" onClick={onSubmit}>
                        Sign Up
                     </Button>
                  </CardActions>
               </Box>
            </Card>
         </form>
      </div>
   );
}

