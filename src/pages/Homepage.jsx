import { Button } from "@mui/material";

function Homepage() {
  return (
    <div style={{ marginTop: "0px" }}>
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "15%",
          textAlign: "center",
        }}>
        <h1 style={{ color: "#82B440" }}>KAKSIKOR</h1>
      </div>
      <img
        src="/assets/welcome.png"
        alt="welcome"
        style={{
          width: "70%",
          marginTop: "10%",
          marginLeft: "22%",
          marginRight: "auto",
        }}
      />
      <p
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          color: "black",
          textAlign: "center",
        }}>
        Welcome to KAKSIKOR, where security meets simplicity. Safeguarding your
        digital world with a touch of seamless authentication. Your protection,
        our priority.
      </p>
      <Button
        type="submit"
        variant="contained"
        href="/login"
        sx={{
          marginLeft: "35%",
          marginRight: "auto",
          marginTop: "10%",
          bgcolor: "#82B440",
          color: "white",
          marginBottom: "100px",
        }}>
        WELCOME
      </Button>
    </div>
  );
}

export default Homepage;
