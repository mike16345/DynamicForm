import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SnackbarProvider } from "./context/SnackBarProvider.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <CssBaseline enableColorScheme />
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);
