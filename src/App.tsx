import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./context/AppContext";
import AppRouteProvider from "./router/AppRouteProvider";

const theme = {
  font: "Calibri",
};

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <AppRouteProvider />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
