import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "16px",
  height: tabHeight,
  minHeight: tabHeight,
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function Notice() {
  const dataList = [
    {
      content: "[일정변경] '22년 HR 간담회 개최 (4.11.월 15시, 신관 Cafeteria)",
      date: "2022-03-31",
    },
    {
      content: "[공지] 정기 주주총회 개최에 따른 협조사항 공지 (3.31.목. 09:00 ~ / 신관 이용자제, 사내식당 미운영)",
      date: "2022-03-29",
    },
    {
      content: "[목표] '22년 개인 OKR 시행 (매출 1,500억, 영업이익 100억, 리더 합의, 4.4.월)",
      date: "2022-03-29",
    },
    {
      content: "[공지]중국법인 청명절 연휴 휴무안내",
      date: "2022-03-28",
    },
    {
      content: "[공지] 인재추천 인센티브제도 시행 안내(포상금 최대 300만원)",
      date: "2022-03-28",
    },
    {
      content: "[공지] '22년 2분기 적용 유류비 공지 (2,310원/10km)",
      date: "2022-03-28",
    },
  ];

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
        {dataList.map((data, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                color: "#333333",
              }}
            >
              {data.content}
            </Typography>
            <Typography
              sx={{
                flexShrink: 0,
                fontSize: 12,
                textAlign: "right",
                color: "#8D8D8D",
              }}
            >
              {data.date}
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
