import { ReactNode } from "react";

import {
  Collapse,
  Divider,
  MenuItem,
  MenuItemProps,
  styled,
} from "@mui/material";
import { Typography } from "../typography";

interface ISidebarMenuItem extends MenuItemProps {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  isExpanded?: boolean;
}

interface ISidebarMenuItemStyled extends MenuItemProps {
  isActive?: boolean;
}

export const SidebarMenuItemStyled = styled(MenuItem)<ISidebarMenuItemStyled>(
  ({ theme, isActive }) => ({
    backgroundColor: isActive ? "#E5F4FF" : "none",
    color: isActive ? "#29A3FF" : "#7B8B96",
    justifyContent: "center",
    position: "relative",
    padding: "4px 16px",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#F7FBFF",
      color: "#29A3FF",
      transition: ".8s",
    },
    "&:before": isActive
      ? {
          content: '""',
          position: "absolute",
          backgroundColor: "#29A3FF",
          boxShadow: "0px 0px 4px #29A3FF",
          width: 8,
          borderRadius: "0 4px 4px 0",
          height: "100%",
          bottom: 0,
          left: 0,
        }
      : {},
  })
);

export const SidebarMenuItem: React.FC<ISidebarMenuItem> = ({
  label,
  icon,
  isActive,
  isExpanded = true,
}) => {
  return (
    <>
      <SidebarMenuItemStyled isActive={isActive}>
        {icon}
        {label}
      </SidebarMenuItemStyled>
      <Collapse in={isExpanded}>
        <Divider />
        <div style={{ backgroundColor: isActive ? "#E5F4FF" : "#fff" }}>
          <div style={{ textAlign: "start", padding: "8px 16px" }}>
            <Typography variant="body2">sub menu</Typography>
          </div>
        </div>
      </Collapse>
    </>
  );
};
