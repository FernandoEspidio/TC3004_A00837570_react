import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// // preview-start
// const providers = [{ id: 'credentials', name: 'Email and Password' }];
// // preview-end

// const signIn = async (provider, formData) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       alert(
//         `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
//       );
//       resolve();
//     }, 300);
//   });
//   return promise;
// };

// export default function CredentialsSignInPage() {
//   const theme = useTheme();
//   return (
//     // preview-start
//     <AppProvider theme={theme}>
//       <SignInPage
//         signIn={signIn}
//         providers={providers}
//         slotProps={{ emailField: { autoFocus: false } }}
//       />
//     </AppProvider>
//     // preview-end
//   );
// }

const Login = ({login}) => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onsubmit = (e) =>{
    e.preventDefault();
    
    if(!username || !password) {
      alert("Los campos no deben estar vacíos");
      return;
    }

    const isLogin = login({username, password})

    if(isLogin) {
      setUsername("");
      setPassword(""); 
      navigate("/home");
    }else {
      alert("el login falló")
    }

  };

  return (
    <form onSubmit={onsubmit}>
      <Box
        margin={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
      >
        <TextField label={"Username"} value={username} onChange={(e)=>setUsername(e.target.value)} />
        <TextField type={"password"} label={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button type={"submit"} variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;