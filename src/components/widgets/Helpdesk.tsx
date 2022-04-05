import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const ValueTypo = styled(Typography)(() => ({
  fontWeight: "fontWeightMedium",
  textAlign: "center",
  color: "#333333",
}));

const HeaderTypo = styled(Typography)(() => ({
  fontSize: "0.7rem",
  letterSpacing: 1,
  textAlign: "center",
  color: "#8d8d8d",
}));

export default function Helpdesk() {
  return (
    <WidgetGrid size={1}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5, alignItems: "center" }}>
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box width={75}>
          <ValueTypo variant="h4">0</ValueTypo>
          <HeaderTypo>요청</HeaderTypo>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box width={75}>
          <ValueTypo variant="h4">1</ValueTypo>
          <HeaderTypo>처리중</HeaderTypo>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box width={75}>
          <ValueTypo variant="h4">7</ValueTypo>
          <HeaderTypo>완료</HeaderTypo>
        </Box>
      </Box>
    </WidgetGrid>
  );
}
