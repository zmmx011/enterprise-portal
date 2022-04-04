import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Typography from "@mui/material/Typography";
import { Step, StepContent, StepLabel } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function Notification() {
  const alarms = [
    {
      label: "전자결재",
      description: `[기안문서종결] [긴급요청 업무신청] 안소희 선임 평일야간(22시)_03/23 (수) 문서가 종결되었습니다`,
      read: false,
    },
    {
      label: "전자결재",
      description: "[개인문서수신] CST, HFSS 전기장 해석용 PC 접속 권한 요청건 문서가 수신되었습니다.",
      read: true,
    },
    {
      label: "일정관리",
      description: `[공유일정] "이사회 진행 20시" 일정 공유되었습니다.`,
      read: true,
    },
    {
      label: "일정관리",
      description: `[공유일정] "무슨 무슨 일정이 있습니다.`,
      read: true,
    },
  ];

  return (
    <WidgetGrid size={1} maxHeight={330}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#333333",
          mb: 1.5,
        }}
      >
        알림
      </Typography>
      {alarms.map((alarm, index) => (
        <Step key={index}>
          <StepLabel sx={{ ml: 0.8 }}>
            <CircleIcon sx={{ fontSize: 8, color: alarm.read ? "#B3B3B3" : "#333333" }} />
            <Typography
              sx={{
                display: "inline",
                pl: 1.5,
                fontSize: 12,
                fontWeight: "bold",
                color: alarm.read ? "#B3B3B3" : "#333333",
              }}
            >
              {alarm.label}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography sx={{ fontSize: 13, color: alarm.read ? "#B3B3B3" : "#333333", mb: 1 }}>
              {alarm.description}
            </Typography>
          </StepContent>
        </Step>
      ))}
    </WidgetGrid>
  );
}
