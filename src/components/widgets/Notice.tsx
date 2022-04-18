import * as React from "react";
import { useEffect, useState } from "react";
import { WidgetGrid } from "./WidgetGrid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import axios from "axios";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface NoticeProps {
  boardNo: number;
  boardInfoNo?: number;
  title?: string;
  userName?: string;
  deptName?: string;
  rankName?: string;
  security?: string;
  important?: string;
  state?: number;
  type?: string;
  registerDate?: string;
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
  const [notice, setNotice] = useState<NoticeProps[]>([])

  useEffect(() => {
    axios
    .get("https://apigw.inveniacorp.com/gw-service/v1/notice/?sortBy=desc&limit=6&offset=0")
    .then((response) => {
      setNotice(response.data);
    });
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WidgetGrid size={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "10px" }}>
        <Tabs value={value} onChange={handleChange} aria-label="hr" sx={{ height: tabHeight, minHeight: tabHeight }}>
          <StyledTab label="전사공지" {...a11yProps(0)} />
          <StyledTab label="주차통제" {...a11yProps(1)} />
          <StyledTab label="식단표" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {notice.map((data, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                color: "#333333"
              }}
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                flexShrink: 0,
                fontSize: 12,
                textAlign: "right",
                color: "#8D8D8D"
              }}
            >
              {data.registerDate}
            </Typography>
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        주차통제
      </TabPanel>
      <TabPanel value={value} index={2}>
        식단표
      </TabPanel>
    </WidgetGrid>
  );
}
