import FormContainer from "../components/FormContainer";
import { Typography, Button, Link, TextField } from "@mui/material";

const LoginForm = () => {
  return (
    <form style={{ marginLeft: "10px", marginRight: "10px" }}>
      <FormContainer>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "80px", fontWeight: "bold" }}>
          Log in
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#a5a5a5",
            marginTop: "10px",
            marginBottom: "30px",
          }}>
          Welcome Back!
        </Typography>

        <TextField
          fullWidth
          helperText="* Required"
          label="Email address"
          name="email"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <TextField
          fullWidth
          label={"Password"}
          helperText="* Required"
          type="password"
          name="password"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
            marginTop: "20px",
          }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", bgcolor: "#82B440" }}>
          Log in
        </Button>

        <Typography
          sx={{
            textAlign: "right",
            margin: "45px 10px",
            "& a": {
              color: "#82B440",
            },
          }}>
          <Link href="/forgot-password">Forgot Password?</Link>
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#a5a5a5",
            marginBottom: "24px",
          }}>
          or Log in with
        </Typography>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", bgcolor: "#2B77E5" }}>
          Continue with Facebook
        </Button>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", bgcolor: "#FFFFFF", color: "black" }}>
          Continue with Google
        </Button>

        <Typography
          sx={{
            marginTop: "72px",
            textAlign: "center",
          }}>
          Dont have an account?{" "}
          <a
            href="/register"
            style={{
              color: "#82B440",
            }}>
            Sign up
          </a>
        </Typography>
      </FormContainer>
    </form>
  );
};

export default LoginForm;
