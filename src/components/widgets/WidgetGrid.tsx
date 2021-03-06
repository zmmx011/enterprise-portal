import React from "react";
import { Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  size: 1 | 2 | 3 | 4;
  maxHeight?: number;
  children: React.ReactNode;
}

const defaultWidth = 350;

export const WidgetGrid: React.FC<Props> = ({ size, maxHeight, children }) => {
  const theme = useTheme();
  return (
    <Grid item>
      <Card
        sx={{
          m: 1,
          p: 2,
          width: defaultWidth * size - Number(theme.spacing(2)),
          maxHeight: maxHeight,
          borderRadius: 2.5,
          overflow: "auto",
        }}
        color="primary"
      >
        {children}
      </Card>
    </Grid>
  );
};
