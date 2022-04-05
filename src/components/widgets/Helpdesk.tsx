import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Helpdesk() {
  return (
    <WidgetGrid size={1}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          HELP DESK
        </Typography>
        <Button variant="outlined" size="small">
          문의하기
        </Button>
      </Box>
    </WidgetGrid>
  );
}
