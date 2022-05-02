import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import * as React from "react";
import avatar from "../../assets/images/avatar.jpg";
import { WidgetGrid } from "./WidgetGrid";
import { useAxios } from "../../hooks/axiosHook";
import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";


interface ApprovalStatusProps {
  inProgressCount?: number;
  unreadReturnCount: number;
  unreadCompleteCount: number;
  inApprovalCount: number;
}

export default function Profile() {
  const { keycloak } = useKeycloak();
  const userId = keycloak ? keycloak.idTokenParsed?.preferred_username : undefined;
  const [mailCount, setMailCount] = useState(0);
  const [approvalStatus, setApprovalStatusCount] = useState<ApprovalStatusProps>();
  const axiosInstance = useAxios(process.env.REACT_APP_GW_BASE_URL + "");


  useEffect(() => {
    if (axiosInstance.current) {
      axiosInstance
      .current
      .get("/mail/" + userId + "/unread-count")
      .then((response) => {
        setMailCount(response.data);
      });
    }
  }, [axiosInstance, userId]);

  useEffect(() => {
    if (axiosInstance.current) {
      axiosInstance
      .current
      .get("/approval/" + userId + "/approval-status")
      .then((response) => {
        setApprovalStatusCount(response.data);
      });
    }
  }, [axiosInstance, userId]);

  const info = (text: string, value: number | undefined) => (
    <Box>
      <Typography
        sx={{
          fontSize: "0.7rem",
          letterSpacing: 1,
          textAlign: "center",
          color: "#8d8d8d"
        }}
      >
        {text}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "fontWeightMedium",
          textAlign: "center",
          color: "#333333"
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
            mt: 1
          }}
        >
          홍길동 선임
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#333333",
            mt: 0.5
          }}
        >
          IT 개발파트
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {info("새 메일", mailCount)}
        {info("결재 진행", approvalStatus?.inProgressCount)}
        {info("결재 완료", approvalStatus?.unreadCompleteCount)}
        {info("결재 수신", approvalStatus?.inApprovalCount)}
      </Box>
    </WidgetGrid>
  );
}
