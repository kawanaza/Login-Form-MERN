import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import logos from '../images/logos.png';
// design
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// functions
import { login } from '../api/user';

const Login = () => {
  const navigate = useNavigate();
  /* const { user, setUser } = useContext(UserContext); */

  // form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      if (res.error) toast.error(res.error);
      else {
        toast.success(res.message);
        /*  setUser(res.username); */
        // redirect the user to home
        navigate('/browser', { replace: true });

             }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="login_form_style container col-10 col-sm-8 col-md-6 col-lg-3">
     
      <div className="text-center mb-5 alert alert-success">
        <label htmlFor="" className="h2">
          Login
        </label>
      </div>

      <div className="form-group">
        <TextField
          size="small"
          variant="outlined"
          className="form-control"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <FormControl
          variant="outlined"
          size="small"
          className="form-control mt-2"
        >
          <InputLabel>Password</InputLabel>

          <OutlinedInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment>
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div className="text-center mt-4">
        <Fab
          className="w-50"
          variant="extended"
          disabled={!email || !password}
          onClick={handleLogin}
        >
          Submit
        </Fab>
      </div>
    </div>
  );
};

export default Login;
