import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Menu05Icon, Menu11Icon } from "hugeicons-react";
import { useAnimate } from "framer-motion";
import {
  Box,
  Button,
  ClickAwayListener,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { NavBarBrand, NavBarItem } from "@/modules/core/components/molecules";
import { getLocalStorage, setLocalStorage } from "@/modules/core/infra/storage";

import { menuList } from "./config";

export const NavBar = (): JSX.Element => {
  const navBarRef = useRef(null);
  const [scope, animate] = useAnimate();
  const theme = useTheme();
  const { pathname } = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isClosedInLocalStorage = getLocalStorage("navbar:isClosed");

  const [isClosed, setIsClosed] = useState<boolean>(
    Boolean(isClosedInLocalStorage)
  );
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handleToggleExpand = () => {
    if (isMobile) {
      setIsMobileNavOpen(!isMobileNavOpen);
      return;
    }

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

  useEffect(() => {
    if (!isMobile) {
      animate(scope.current, { left: 0 });
      return;
    }

    if (isMobileNavOpen) {
      animate(scope.current, { left: 0 });
      return;
    }

    animate(scope.current, { left: -220 });
  }, [isMobileNavOpen, isMobile]);

  useEffect(() => {
    if (isMobile) {
      setIsClosed(false);
      return;
    }

    setIsClosed(isClosedInLocalStorage);
  }, [isMobile]);

  return (
    <>
      {isMobile && isMobileNavOpen && (
        <Box
          position="fixed"
          width="100vw"
          height="100vh"
          left={0}
          top={0}
          bgcolor={"rgb(0 0 0 / 62%)"}
          zIndex={9}
          ref={navBarRef}
        />
      )}

      <ClickAwayListener onClickAway={() => setIsMobileNavOpen(false)}>
        <Box
          ref={scope}
          display="flex"
          flexDirection="column"
          padding={`${theme.spacing(1)} ${theme.spacing(2)}`}
          gap={theme.spacing(5)}
          bgcolor={theme.palette.background.default}
          position={isMobile ? "fixed" : "relative"}
          height={isMobile ? "100vh" : "auto"}
          left={isMobileNavOpen ? 0 : isMobile ? -220 : 0}
          zIndex={999}
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
              boxShadow: theme.shadows[6],
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              zIndex: 999999,
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
                    align={isClosed ? "center" : "left"}
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
                      onClick={() => setIsMobileNavOpen(false)}
                    />
                  ))}
                </Box>
              );
            })}
          </Box>
        </Box>
      </ClickAwayListener>
    </>
  );
};
