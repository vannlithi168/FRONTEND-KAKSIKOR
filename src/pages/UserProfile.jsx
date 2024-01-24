import Avatar from "@mui/material/Avatar";
import { Typography, Button, TextField } from "@mui/material";

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Avatar
        alt="profile"
        src="/assets/pfpic.jpg"
        sx={{
          width: 100,
          height: 100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <Typography>Username</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
      />

      <Typography>Email</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
      />

      <Typography>Address</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
      />

      <Typography>BirthDate</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
      />

      <Typography>Gender</Typography>
      <TextField
        fullWidth
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px", bgcolor: "#82B440" }}>
        Update
      </Button>
    </div>
  );
};

export default UserProfile;
