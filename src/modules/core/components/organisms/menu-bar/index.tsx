import { ReactNode } from "react";

import { Box, useColorScheme, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar, TopBar } from "@/modules/core/components/organisms";

interface MenuBarProps {}

export const MenuBar = ({}: MenuBarProps): JSX.Element => {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();
  console.log({ mode });

  return (
    <Box display="flex" bgcolor={theme.palette.background.default}>
      <NavBar />

      <Box
        width="100%"
        paddingTop={1}
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={4}
        gap={2}
        display="grid"
      >
        <TopBar />

        <Box
          minHeight="100vh"
          bgcolor={theme.palette.background.paper}
          borderRadius={6}
          padding={3}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
