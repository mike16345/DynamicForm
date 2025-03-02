import "./App.css";
import DynamicFormPage from "./pages/DynamicFormPage";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <DynamicFormPage />
    </Box>
  );
}

export default App;
