import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Menu05Icon, Menu11Icon } from "hugeicons-react";
import { useAnimate } from "framer-motion";
import { Box, Button, Typography, useTheme } from "@mui/material";

import { NavBarBrand, NavBarItem } from "@/modules/core/components/molecules";
import { getLocalStorage, setLocalStorage } from "@/modules/core/infra/storage";

import { menuList } from "./config";

export const NavBar = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const theme = useTheme();
  const { pathname } = useLocation();
  console.log({ pathname });

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
        {menuList.map(({ items, title }) => {
          const isGroupActive = items.some(
            ({ redirectTo }) => pathname === redirectTo
          );

          return (
            <Box
              key={`menu-group-box-${title}`}
              display="flex"
              flexDirection="column"
              gap={theme.spacing(0.5)}
            >
              <Typography
                variant="overline"
                color={isGroupActive ? "primary" : "textSecondary"}
              >
                {title}
              </Typography>

              {items.map(({ label, Icon, redirectTo }) => (
                <NavBarItem
                  key={`menu-item-${label}`}
                  label={label}
                  Icon={Icon}
                  redirectTo={redirectTo}
                  isClosed={isClosed}
                  isActive={pathname === redirectTo}
                />
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
