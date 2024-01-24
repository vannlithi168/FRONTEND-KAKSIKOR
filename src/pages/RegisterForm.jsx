// src/components/RegisterForm.js

import FormContainer from "../components/FormContainer";

import {
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <form style={{ marginLeft: "10px", marginRight: "10px" }}>
      <FormContainer>
        <Typography
          variant="h4"
          className="title"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            margin: "24px",
            marginTop: "80px",
          }}>
          Sign up
        </Typography>
        <TextField
          fullWidth
          label="Username"
          type="text"
          name="userName"
          margin="normal"
          variant="outlined"
          helperText={"require"}
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
          label="Email"
          type="text"
          name="email"
          margin="normal"
          variant="outlined"
          helperText={"require"}
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
          label="Phone Number"
          type="text"
          name="phoneNumber"
          margin="normal"
          variant="outlined"
          helperText={"require"}
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
          label="Address"
          type="text"
          name="address"
          margin="normal"
          variant="outlined"
          helperText="Optional"
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
          label="Birth Date"
          type="date"
          name="birthDate"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Optional"
          sx={{
            marginTop: "20px",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}
        />
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#82B440",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#82B440",
            },
          }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select labelId="gender-label" label="Gender" name="gender">
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <FormHelperText>Optional</FormHelperText>
        </FormControl>

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          helperText={"require"}
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
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          margin="normal"
          variant="outlined"
          helperText={"require"}
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
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", bgcolor: "#82B440" }}>
          Sign up
        </Button>
        <Typography
          sx={{
            marginTop: "50px",
            textAlign: "center",
          }}>
          Already an account?{" "}
          <a
            href="/login"
            style={{
              color: "#82B440",
            }}>
            Log in
          </a>
        </Typography>
      </FormContainer>
    </form>
  );
};

export default RegisterForm;
