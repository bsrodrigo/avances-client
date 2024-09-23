import { LinearProgress } from "@mui/material";
import { ReactNode } from "react";

interface LoadingContentProps {
  children: ReactNode | ReactNode[];
  loading: boolean;
}

export const LoadingContent = ({
  children,
  loading,
}: LoadingContentProps): JSX.Element => (
  <div>{loading ? <LinearProgress /> : children}</div>
);
