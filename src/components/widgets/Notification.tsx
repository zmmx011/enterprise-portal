import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material/styles";
import { Step, StepLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
import { useKeycloak } from "@react-keycloak/web";
import { useAxios } from "../../hooks/axiosHook";
import { useTranslation } from "react-i18next";
import * as dateFns from "date-fns";
import koLocale from "date-fns/locale/ko";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { append, concat } from "../../redux/notify";

const Content = styled("div")(({ theme }) => ({
  marginLeft: 12, // half icon
  paddingLeft: 8 + 12, // margin + half icon
  paddingRight: 8,
  paddingBottom: 10,
  borderLeft: `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600]}`
}));

interface NotifyProps {
  no: number;
  title: string;
  content: string;
  registerDate: string;
  eventType: string;
}

interface EventProps {
  no: number;
  userNo: string;
  eventCode: string;
  eventData1: string;
  eventData2?: any;
  eventTitleResId: string;
  eventTitleData1: string;
  eventTitleData2?: any;
  regDate: string;
  menuNo: string;
  readYN: string;
  companyNum: string;
}

export default function Notification() {
  const { t } = useTranslation();
  const { keycloak, initialized } = useKeycloak();
  const [listening, setListening] = useState(false);
  const userId = keycloak ? keycloak.idTokenParsed?.preferred_username : undefined;
  //const [notify, setNotify] = useState<NotifyProps[]>([]);
  const notify = useSelector((state: RootState) => state.notify);
  const dispatch = useDispatch();

  const axiosInstance = useAxios(process.env.REACT_APP_GW_BASE_URL + "");
  const kcToken = keycloak != null && keycloak.token != null ? keycloak.token : "";

  useEffect(() => {
    if (axiosInstance.current) {
      axiosInstance
      .current
      .get("/event-log/" + userId + "/?sortBy=desc&limit=20&offset=1")
      .then((response) => {
        let event = response.data.map((value: EventProps) => {
          return {
            no: value.no,
            title: t("notify.gw." + value.menuNo),
            content: "[" + t("notify.gw.code." + value.eventCode) + "] " + value.eventTitleData1,
            registerDate: value.regDate,
            eventType: "gw"
          };
        });
        dispatch(concat(event));
      });
    }
  }, [axiosInstance, dispatch, t, userId]);

  useEffect(() => {
    if (!listening) {
      let sse = new EventSourcePolyfill(process.env.REACT_APP_PORTAL_BASE_URL + "/notify/subscribe/" + userId, {
        headers: {
          Authorization: initialized ? `Bearer ${kcToken}` : ""
        }
      });
      sse.onopen = () => {
        console.log("profile sse connection opened");
      };
      sse.onmessage = e => {
        if (!e.data) return;
        console.log("result", e.data);
        let event: NotifyProps = {
          no: 1,
          title: e.data.title,
          content: e.data.content,
          registerDate: "2022-05-03 10:00:00",
          eventType: "gw"
        };
        dispatch(append(event));
      };
      sse.onerror = e => {
        console.error("error", e);
      };
      setListening(true);
    }
  }, [dispatch, initialized, kcToken, listening, userId]);

  return (
    <WidgetGrid size={1} maxHeight={330}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#333333",
          mb: 1.5
        }}
      >
        알림
      </Typography>
      {notify.map((data, index) => (
        <Step key={index}>
          <StepLabel sx={{ ml: 0.8 }}>
            <CircleIcon sx={{ fontSize: 8 }} />
            <Typography
              sx={{
                display: "inline",
                pl: 1.5,
                fontSize: 12,
                fontWeight: "bold"
              }}
            >
              {data.title}
            </Typography>
          </StepLabel>
          <Content>
            <Typography sx={{ fontSize: 13 }}>{data.content}</Typography>
            <Typography variant="caption">
              {dateFns.format(Date.parse(data.registerDate), "yyyy-MM-dd HH:mm:ss", { locale: koLocale })}
            </Typography>
          </Content>
        </Step>
      ))}
    </WidgetGrid>
  );
}
