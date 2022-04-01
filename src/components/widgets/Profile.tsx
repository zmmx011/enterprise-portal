import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import * as React from "react";
import avatar from "../../assets/images/avatar.jpg";
import { WidgetGrid } from "./WidgetGrid";

export default function Profile() {
  const info = (text: string, value: number) => (
    <Box sx={{ width: 52.5, height: 44 }}>
      <Typography
        sx={{
          height: 16,
          fontSize: 11,
          lineHeight: 1.27,
          letterSpacing: "1px",
          textAlign: "center",
          color: "#8d8d8d",
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          height: 16,
          fontSize: 26,
          fontWeight: "500",
          lineHeight: "0.54",
          textAlign: "center",
          color: "#333333",
          mt: "12px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  return (
    <WidgetGrid size={1}>
      <Box sx={{ p: 0, display: "flex", flexDirection: "column", alignItems: "center", mb: "20px" }}>
        <Avatar alt="Henry Cavill" src={avatar} sx={{ width: 87, height: 87, my: "6px" }} />
        <Typography
          sx={{
            height: "20px",
            textAlign: "center",
            width: "110px",
            color: "#333333",
            fontSize: 20,
            lineHeight: 0.7,
            fontWeight: "bold",
            mt: "6px",
          }}
        >
          홍길동 선임
        </Typography>
        <Typography
          sx={{
            height: "14px",
            textAlign: "center",
            width: "110px",
            color: "#333333",
            fontSize: 14,
            lineHeight: 1,
            mt: "6px",
          }}
        >
          IT 개발파트
        </Typography>
      </Box>
      <Box sx={{ p: 0, display: "flex", justifyContent: "center" }}>
        {info("새 메일", 4)}
        {info("결재 진행", 0)}
        {info("결재 완료", 1)}
        {info("결재 수신", 7)}
      </Box>
    </WidgetGrid>
  );
}
