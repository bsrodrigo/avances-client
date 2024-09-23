import { ReactNode } from "react";

import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";

import { CloseButtonStyled, DialogBaseStyled } from "./styled";
import React from "react";
import { Cancel01Icon } from "hugeicons-react";

interface IDialog {
  cancelLabel?: string;
  confirmLabel?: string;
  children: ReactNode | ReactNode[];
  confirmDisabled?: boolean;
  hiddenCloseButton?: boolean;
  loading?: boolean;
  maxWidth?: "small" | "medium" | "large";
  open: boolean;
  reverseActionsButtons?: boolean;
  subtitle?: string;
  title: string;
  variant?: "default" | "error";
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose: () => void;
}

export const Dialog: React.FC<IDialog> = ({
  cancelLabel,
  confirmLabel,
  children,
  confirmDisabled,
  hiddenCloseButton,
  loading,
  maxWidth,
  open,
  reverseActionsButtons,
  subtitle,
  title,
  variant = "default",
  onCancel,
  onConfirm,
  onClose,
}) => {
  const theme = useTheme();

  const renderCancelButton = (): ReactNode => {
    if (!onCancel) return "";

    return (
      <Button onClick={onCancel} disabled={loading}>
        {cancelLabel || "Cancelar"}
      </Button>
    );
  };

  return (
    <DialogBaseStyled styledMaxWidth={maxWidth} open={open}>
      <DialogTitle>
        <Typography variant="h6" color={theme.palette.grey[800]}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color={theme.palette.grey[800]}>
            {subtitle}
          </Typography>
        )}

        {!hiddenCloseButton && (
          <CloseButtonStyled
            color={variant === "default" ? "primary" : "error"}
            onClick={onClose}
          >
            <Cancel01Icon />
          </CloseButtonStyled>
        )}
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions>
        {!reverseActionsButtons && renderCancelButton()}

        {onConfirm && (
          <Button
            variant="contained"
            color={variant === "error" ? variant : "primary"}
            onClick={onConfirm}
            disabled={confirmDisabled || loading}
            endIcon={loading && <CircularProgress size={16} />}
          >
            {confirmLabel || "Confirmar"}
          </Button>
        )}

        {reverseActionsButtons && renderCancelButton()}
      </DialogActions>
    </DialogBaseStyled>
  );
};
