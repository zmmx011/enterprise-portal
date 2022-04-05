import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import * as React from "react";
import avatar from "../../assets/images/avatar.jpg";
import { WidgetGrid } from "./WidgetGrid";

export default function Profile() {
  const info = (text: string, value: number) => (
    <Box>
      <Typography
        sx={{
          height: 16,
          fontSize: "0.7rem",
          lineHeight: 1.27,
          letterSpacing: 1,
          textAlign: "center",
          color: "#8d8d8d",
        }}
      >
        {text}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "fontWeightMedium",
          textAlign: "center",
          color: "#333333",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  return (
    <WidgetGrid size={1}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: "20px" }}>
        <Avatar alt="Henry Cavill" src={avatar} sx={{ width: 87, height: 87, my: "6px" }} />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#333333",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          홍길동 선임
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#333333",
            mt: 0.5,
          }}
        >
          IT 개발파트
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {info("새 메일", 4)}
        {info("결재 진행", 0)}
        {info("결재 완료", 1)}
        {info("결재 수신", 7)}
      </Box>
    </WidgetGrid>
  );
}
