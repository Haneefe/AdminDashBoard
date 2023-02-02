import { Box } from "@mui/material";
import Header from "../../components/Header";
const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={"DASHBOARD"} subtitle={"Welcome to your dash board"} />
      </Box>
    </Box>
  );
};

export default DashBoard;
