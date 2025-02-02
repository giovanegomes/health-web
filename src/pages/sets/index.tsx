import { Fab, Typography } from "@mui/material";
import SetTable from "./list";

export default function Sets() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sets
      </Typography>
      <SetTable />
      <Fab
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        color="primary"
      />
    </>
  )
}