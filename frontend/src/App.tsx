import "./App.css";
import DynamicFormPage from "./pages/DynamicFormPage";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        padding: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Dynamic Form Submission
      </Typography>

      <DynamicFormPage />
    </Box>
  );
}

export default App;
