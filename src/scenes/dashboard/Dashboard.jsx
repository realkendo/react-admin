import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" margin="10px 10px">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </>
  )
}
export default Dashboard;