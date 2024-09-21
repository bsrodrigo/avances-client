import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Shadows,
  useTheme,
} from "@mui/material";
import { lightPalette, darkPalette, shadows } from "@/modules/core/bosons";

interface IThemeProvides {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvides): JSX.Element => {
  const defaultTheme = useTheme();

  const theme = createTheme({
    colorSchemes: {
      dark: {
        palette: { ...darkPalette },
      },
      light: {
        palette: {
          ...lightPalette,
        },
      },
    },
    typography: {
      overline: {
        fontWeight: 500,
        letterSpacing: 0.5,
      },
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            "& .MuiAlert-message": {
              width: "100%",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            minWidth: 112,
            boxShadow: "none",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingTop: 24,
            paddingLeft: "48px !important",
            paddingRight: "48px !important",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            padding: 24,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: 24,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "32px 24px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 24,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              borderRadius: 12,
              height: 56,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "rgba(0,0,0, .07)",
              width: 8,
              height: 8,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#b9b9b9",
              minHeight: 8,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#b9b9b9",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#b9b9b9",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#b9b9b9",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "unset",
            },
          },
        },
      },
    },
    shadows: [...shadows] as Shadows,
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
