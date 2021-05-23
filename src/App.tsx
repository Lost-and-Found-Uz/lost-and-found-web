import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./context/AppContext";
import AppRouteProvider from "./router/AppRouteProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const theme = {
  font: "Calibri",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouteProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;
