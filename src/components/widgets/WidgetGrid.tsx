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
    <Grid item sx={{ width: defaultWidth * size - Number(theme.spacing(2)) }}>
      <Card
        sx={{
          m: 1,
          p: 2,
          width: defaultWidth * size - Number(theme.spacing(2)),
          borderRadius: 1,
        }}
        color="primary"
      >
        {children}
      </Card>
    </Grid>
  );
};
