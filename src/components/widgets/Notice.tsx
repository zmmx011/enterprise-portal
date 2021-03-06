import * as React from "react";
import { useEffect, useState } from "react";
import { WidgetGrid } from "./WidgetGrid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useAxios } from "../../hooks/axiosHook";
import * as dateFns from "date-fns";
import koLocale from "date-fns/locale/ko";
import { Link } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface NoticeProps {
  boardNo: number;
  boardInfoNo: number;
  title: string;
  userName?: string;
  deptName?: string;
  rankName?: string;
  security?: string;
  important?: string;
  state?: number;
  type?: string;
  registerDate: string;
  hit?: number;
  attachYN?: string;
  reservationYN?: string;
  modifyDate?: string;
  userId?: string;
  startDate?: string;
  endDate?: string;
  userNo?: string;
  fileNo?: any;
  noticeYN?: string;
  activeYN?: string;
  tag?: string;
  contentMode?: string;
  entryDate?: string;
  entryDept?: string;
  fixView?: string;
  noticeStartDate?: string;
  noticeEndDate?: string;
  noticeReserveYN?: string;
  loginYN?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const tabHeight = 30;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "16px",
  height: tabHeight,
  minHeight: tabHeight,
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function Notice() {
  const [tab, setTab] = useState(0);
  const [notice, setNotice] = useState<NoticeProps[]>([]);
  const axiosInstance = useAxios(process.env.REACT_APP_GW_BASE_URL + "");
  useEffect(() => {
    if (tab !== 0) return;
    if (axiosInstance.current) {
      axiosInstance
      .current
      .get("notice/?sortBy=desc&limit=6&offset=1")
      .then((response) => {
        setNotice(response.data);
      });
    }
  }, [axiosInstance, tab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const createNoticeLink = (data: NoticeProps) => {
    let url = new URL("https://hello.inveniacorp.com");
    url.searchParams.set("boardInfoNo", String(data.boardInfoNo));
    url.searchParams.set("boardNo", String(data.boardNo));

    return new URL(url.origin + "/nc.n#" + window.btoa("/notice/board/boardView.n?" + url.searchParams)).toString();
  };

  return (
    <WidgetGrid size={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "10px" }}>
        <Tabs value={tab} onChange={handleChange} aria-label="hr" sx={{ height: tabHeight, minHeight: tabHeight }}>
          <StyledTab label="????????????" {...a11yProps(0)} />
          <StyledTab label="????????????" {...a11yProps(1)} />
          <StyledTab label="?????????" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        {notice.map((data, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Link
              href={createNoticeLink(data)}
              target="_blank"
              color="inherit"
              underline="none"
              variant="body2"
              sx={{
                textAlign: "left",
                color: "#333333"
              }}
            >
              {data.title}
            </Link>
            <Typography
              sx={{
                flexShrink: 0,
                fontSize: 12,
                textAlign: "right",
                color: "#8D8D8D"
              }}
            >
              {dateFns.format(Date.parse(data.registerDate), "yyyy-MM-dd", { locale: koLocale })}
            </Typography>
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        ????????????
      </TabPanel>
      <TabPanel value={tab} index={2}>
        ?????????
      </TabPanel>
    </WidgetGrid>
  );
}
