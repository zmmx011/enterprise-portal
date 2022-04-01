import React from "react";
import { Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  size: 1 | 2 | 3 | 4;
}

const defaultWidth = 300;

export const WidgetGrid: React.FC<Props> = ({ size, children }) => {
  const theme = useTheme();
  return (
    <Grid item>
      <Card
        sx={{
          m: "10px",
          p: "20px",
          width: defaultWidth * size - Number(theme.spacing(2)),
          borderRadius: "4px",
        }}
        color="primary"
      >
        {children}
      </Card>
    </Grid>
  );
};