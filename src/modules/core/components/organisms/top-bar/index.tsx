import {
  Avatar,
  Box,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { ThemeModeSwitch } from "@/modules/core/components/atoms";

interface TopBarProps {}

export const TopBar = ({}: TopBarProps): JSX.Element => {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  return (
    <Box
      height={72}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box>
        <ThemeModeSwitch
          // sx={{ m: 1 }}
          checked={mode === "dark"}
          onChange={(_event, checked) => {
            setMode(checked ? "dark" : "light");
          }}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        borderRadius={8}
        height={64}
        bgcolor={theme.palette.background.paper}
        padding={1}
        gap={1}
      >
        <Box padding={1}>
          <Typography variant="caption">Olá,</Typography>
          <Typography variant="body2">User name</Typography>
        </Box>
        <Avatar sx={{ width: 48, height: 48 }} />
      </Box>
    </Box>
  );
};
