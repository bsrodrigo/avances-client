import { DialogProps } from "@mui/material";
import { Dialog, IconButton, styled } from "@mui/material";

const widthOptions = {
  small: 480,
  medium: 720,
  large: 1080,
};

interface IDialogBaseStyled extends DialogProps {
  styledMaxWidth?: "small" | "medium" | "large";
}

export const CloseButtonStyled = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 16,
  top: 16,
  color: theme.palette.grey[500],
}));

export const DialogBaseStyled = styled(Dialog)<IDialogBaseStyled>(
  ({ styledMaxWidth = "large", theme }) => ({
    "& .MuiDialog-paper": {
      width: "80%",
      maxHeight: "90vh",
      maxWidth: widthOptions[styledMaxWidth],

      [theme.breakpoints.down("md")]: {
        margin: 0,
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        borderRadius: "unset",
      },
    },
  })
);
