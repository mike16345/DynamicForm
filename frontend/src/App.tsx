import { Grid2, Box } from "@mui/material";
import "./App.css";
import PreviousFormsList from "./components/Forms/PreviousFormsList";
import UserRegistrationSchema from "./constants/Fields";
import DynamicForm from "./components/Forms/DynamicForm";

function App() {
  return (
    <Box width={"100%"} height={"100%"} sx={{ padding: 2 }}>
      <Grid2 container justifyContent={"center"} spacing={3}>
        <PreviousFormsList />
        <DynamicForm form={UserRegistrationSchema} />
      </Grid2>
    </Box>
  );
}

export default App;
