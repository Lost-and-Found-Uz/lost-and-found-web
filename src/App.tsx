import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./context/AppContext";
import AppRouteProvider from "./router/AppRouteProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const theme = {
  font: "Calibri",
};

const queryClient = new QueryClient();

function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouteProvider />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;
