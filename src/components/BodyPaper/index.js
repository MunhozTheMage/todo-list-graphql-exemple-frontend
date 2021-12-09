import { Box, Paper as MuiPaper } from "@mui/material";
import { withStyles } from "@mui/styles";

const Paper = withStyles({
  root: {
    width: "550px",
    padding: "30px",
  },
})(MuiPaper);

export const BodyPaper = ({ children }) => (
  <Box
    width="100vw"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Paper elevation={3}>{children}</Paper>
  </Box>
);
