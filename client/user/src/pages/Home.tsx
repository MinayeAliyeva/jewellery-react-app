import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography>Hesabin varsa:</Typography>
        <Button variant="contained">Login</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography>Hesabin yoksa:</Typography>
        <Button variant="contained">Register</Button>
      </Box>
      Home
    </div>
  );
};

export default Home;
