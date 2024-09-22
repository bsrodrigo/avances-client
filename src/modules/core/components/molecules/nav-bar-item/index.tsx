import { RefAttributes, useEffect } from "react";
import { HugeiconsProps } from "hugeicons-react";

import { Box, Typography, useTheme } from "@mui/material";

import { NavBarItemBox } from "@/modules/core/components/atoms";
import { useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavBarItemProps {
  Icon: React.FC<Omit<HugeiconsProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  redirectTo: string;
  isClosed?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavBarItem = ({
  Icon,
  label,
  redirectTo,
  isClosed,
  isActive,
  onClick,
}: NavBarItemProps): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }

    navigate(redirectTo);
  };

  useEffect(() => {
    if (isClosed) {
      animate(scope.current, { width: 0 });
      return;
    }

    animate(scope.current, { width: "100%" });
  }, [isClosed]);

  const color = isActive ? theme.palette.primary.main : theme.palette.grey[600];

  return (
    <NavBarItemBox
      isClosed={isClosed}
      onClick={handleOnClick}
      textAlign={isClosed ? "center" : "left"}
    >
      <Box width={32}>
        <Icon color={color} type="solid" fontSize={theme.spacing(5)} />
      </Box>

      <Typography
        ref={scope}
        variant="button"
        color={color}
        width={isClosed ? 0 : "100%"}
        overflow="hidden"
      >
        {label}
      </Typography>
    </NavBarItemBox>
  );
};
