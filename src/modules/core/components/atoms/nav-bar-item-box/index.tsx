import { Box, keyframes, rgbToHex, styled } from "@mui/material";

interface NavBarItemBoxProps {
  isClosed?: boolean;
}

export const NavBarItemBox = styled(Box)<NavBarItemBoxProps>(
  ({ theme, isClosed }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: isClosed ? "center" : "flex-start",
    padding: isClosed ? 0 : theme.spacing(1, 2),
    height: theme.spacing(5),
    minWidth: theme.spacing(5),
    borderRadius: theme.spacing(2),
    gap: isClosed ? 0 : theme.spacing(1),
    cursor: "pointer",

    ":hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);
