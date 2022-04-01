import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Divider, Popover } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabHeight = 28;

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "14px",
  height: tabHeight,
  minHeight: tabHeight,
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  marginBottom: "8px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function HR() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const info = (text: string, value: string) => (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 0, mb: "3px" }}>
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "23px",
          textAlign: "left",
          color: "#8D8D8D",
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "23px",
          fontWeight: "700",
          textAlign: "right",
          color: "#333333",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popOpen = Boolean(anchorEl);

  return (
    <WidgetGrid size={1}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "10px" }}>
        <Tabs value={value} onChange={handleChange} aria-label="hr" sx={{ height: tabHeight, minHeight: tabHeight }}>
          <StyledTab label="근태 현황" {...a11yProps(0)} />
          <StyledTab label="팀 휴가현황" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {info("출근 시간", "08:50")}
        {info("잔여 연차", "12.5일")}
        <Divider sx={{ mt: "5px" }} />
        <Box sx={{ display: "flex", p: 0, my: "15px" }}>
          <Typography
            sx={{
              fontSize: 13,
              lineHeight: "14px",
              fontWeight: "700",
              color: "#333333",
              mr: "4px",
            }}
          >
            주간 근무 현황
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              lineHeight: "14px",
              fontWeight: "700",
            }}
            aria-owns={popOpen ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <FontAwesomeIcon icon={faCircleInfo} color="#8D8D8D" />
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={popOpen}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>Hello. damu</Typography>
          </Popover>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 0, my: "7px" }}>
          <Box sx={{ display: "flex", p: 0 }}>
            <Typography
              sx={{
                fontSize: 25,
                lineHeight: "23px",
                color: "#333333",
              }}
            >
              40
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                lineHeight: "23px",
                color: "#333333",
              }}
            >
              시간
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: 0 }}>
            <Typography
              sx={{
                fontSize: 18,
                lineHeight: "23px",
                color: "#FFD3D3",
              }}
            >
              OverTime:
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "23px",
                color: "#FFD3D3",
              }}
            >
              0h
            </Typography>
          </Box>
        </Box>
        <Box>
          <StyledProgress variant="determinate" value={50} />
        </Box>
        {info("3월 교통비", "240,000원")}
      </TabPanel>
      <TabPanel value={value} index={1}>
        팀 휴가현황
      </TabPanel>
    </WidgetGrid>
  );
}
