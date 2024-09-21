import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { CssBaseline } from "@mui/material";

// import { LinearProgress } from "@/modules/core/presenters/components/atoms";
import { ThemeProvider } from "@/modules/core/contexts";
import { router } from "@/modules/core/routes";

const App: React.FC = () => {
  return (
    <>
      {/* <ScopedCssBaseline enableColorScheme> */}
      <ThemeProvider>
        <CssBaseline />
        <Suspense fallback={"loading..."}>
          <RouterProvider router={router} />
        </Suspense>
        {/* <NavBar>
          <Container maxWidth="xl">
            <Suspense fallback={<LinearProgress />}>
              
              <AppRoutes />
            </Suspense>
          </Container>
        </NavBar> */}
      </ThemeProvider>
      {/* </ScopedCssBaseline> */}
    </>
  );
};

export default App;
