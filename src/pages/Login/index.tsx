import styles from './Login.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountCircle, LockOutlined } from '@mui/icons-material';
import {
   Card,
   CardActions,
   CardContent,
   FormControl,
   Box,
   FormControlLabel,
   Checkbox,
   TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Controller, useForm } from 'react-hook-form';

interface FormValues {
   username: string;
   password: string;
   rememberMe: boolean;
}

const defaultValues: FormValues = {
   username: '',
   password: '',
   rememberMe: false,
};

interface State {
   username: String;
   password: string;
   rememberMe: boolean;
}

const SigninSchema = yup.object().shape({
   username: yup
      .string()
      .required('User name is required')
      .email('Email is not valid form(Ex: abc@gmail.com)'),
   password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be more than 5 characters')
      .max(25, 'Password must be less than 25 characters'),
   rememberMe: yup.bool(),
});

export default function Login() {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({ defaultValues: defaultValues, resolver: yupResolver(SigninSchema) });

   const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data));
      console.log(JSON.stringify(data));
   };

   // const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
   //    setValues({ ...values, [prop]: event.target.value });
   // };

   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Card className={styles.cardLogin}>
               <CardContent>
                  <h1>Sign In</h1>
                  <FormControl fullWidth>
                     <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                           <>
                              <span className={styles.textInput}>
                                 <i>
                                    <AccountCircle />
                                 </i>
                                 Account
                              </span>
                              <TextField
                                 placeholder="Please enter your username"
                                 helperText={
                                    errors.username && (
                                       <p className={styles.errMess}>{errors.username.message}</p>
                                    )
                                 }
                                 {...field}
                              />
                           </>
                        )}
                     />
                  </FormControl>
                  <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
                     <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                           <>
                              <span className={styles.textInput}>
                                 <LockOutlined />
                                 Password
                              </span>
                              <TextField
                                 className={styles.inputType}
                                 type="password"
                                 placeholder="Please enter your password"
                                 helperText={
                                    errors.password && (
                                       <p className={styles.errMess}>{errors.password.message}</p>
                                    )
                                 }
                                 {...field}
                              />
                           </>
                        )}
                     />
                  </FormControl>
                  <FormControl>
                     <Controller
                        name="rememberMe"
                        control={control}
                        render={({ field }) => (
                           <FormControlLabel
                              sx={{mt: 5}}
                              control={<Checkbox {...field} />}
                              label="Remember Me."
                           />
                        )}
                     />
                  </FormControl>
               </CardContent>
               <CardContent>
                  <Link className={styles.link} to={config.routes.register}>
                     No account ? Register here
                  </Link>
                  <br />
                  <Link className={styles.link} to={config.routes.home}>
                     Back to home page
                  </Link>
               </CardContent>
               <CardActions style={{ justifyContent: 'center' }}>
                  <button className={styles.submitButton} type="submit" onClick={() => {}}>
                     Login
                  </button>
               </CardActions>
            </Card>
         </form>
      </Box>
   );
}
