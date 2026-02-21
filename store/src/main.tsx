import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./index.css";
import App from "./App.tsx";
import Container from "./Component/Container.tsx";
import rtlCache from "././Component/Rtl.tsx";
import theme from "././Component/Theme.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode> 
     <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div dir="rtl">
            <Container>
              <App />
            </Container>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  </BrowserRouter> 
  </StrictMode>,
);