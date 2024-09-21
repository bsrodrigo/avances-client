import {
  Home01Icon,
  Money02Icon,
  Payment01Icon,
  Menu05Icon,
  Menu11Icon,
} from "hugeicons-react";
import { Box, Button, Typography, useTheme } from "@mui/material";

import { NavBarBrand, NavBarItem } from "@/modules/core/components/molecules";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { set } from "date-fns";
import { getLocalStorage, setLocalStorage } from "@/modules/core/infra/storage";
import { get } from "http";

export const NavBar = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const theme = useTheme();

  const isClosedInLocalStorage = getLocalStorage("navbar:isClosed");
  const [isClosed, setIsClosed] = useState<boolean>(
    Boolean(isClosedInLocalStorage)
  );

  const handleToggleExpand = () => {
    setIsClosed(!isClosed);
    setLocalStorage("navbar:isClosed", !isClosed);
  };

  useEffect(() => {
    if (isClosed) {
      animate(scope.current, { width: 100 });
      return;
    }
    animate(scope.current, { width: 220 });
  }, [isClosed]);

  return (
    <Box
      ref={scope}
      display="flex"
      flexDirection="column"
      padding={`${theme.spacing(1)} ${theme.spacing(2)}`}
      gap={theme.spacing(5)}
      position="relative"
    >
      <NavBarBrand isClosed={isClosed} />

      <Button
        variant="contained"
        color="primary"
        onClick={handleToggleExpand}
        style={{
          position: "absolute",
          minWidth: "unset",
          padding: 8,
          right: -56,
          top: 24,
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {isClosed ? <Menu11Icon /> : <Menu05Icon />}
      </Button>

      <Box display="flex" flexDirection="column" gap={theme.spacing(2)}>
        <Box display="flex" flexDirection="column" gap={theme.spacing(0.5)}>
          <Typography variant="overline" color="textSecondary">
            Home
          </Typography>
          <NavBarItem
            Icon={Home01Icon}
            label="home"
            isClosed={isClosed}
            isActive
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={theme.spacing(0.5)}
          justifyContent={isClosed ? "center" : "flex-start"}
        >
          <Typography variant="overline" color="textSecondary">
            Financeiro
          </Typography>
          <NavBarItem
            Icon={Payment01Icon}
            label="Compras"
            isClosed={isClosed}
          />
          <NavBarItem Icon={Money02Icon} label="Vendas" isClosed={isClosed} />
        </Box>
      </Box>
    </Box>
  );
};
