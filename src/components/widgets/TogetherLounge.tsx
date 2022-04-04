import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TogetherLounge() {
  const info = (text: string, value: string) => (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 0, mb: 1 }}>
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          color: "#8D8D8D",
        }}
      >
        {text}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "right",
          color: "#333333",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  return (
    <WidgetGrid size={1}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#333333",
          mb: 1.5,
        }}
      >
        Together Lounge
      </Typography>
      {info("Cozy(현재)", "38,000원")}
      {info("Cozy(전월)", "47,500원")}
      {info("점심 이용금액(현재)", "21,000원")}
      {info("헬스장 이용시간", "7시간")}
    </WidgetGrid>
  );
}
