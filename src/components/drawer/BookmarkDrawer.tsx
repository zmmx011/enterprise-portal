import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface BookmarkDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookmarkDrawer({ drawerOpen, setDrawerOpen }: BookmarkDrawerProps) {
  const { t } = useTranslation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const [inveniaLinkOpen, setInveniaLinkOpen] = React.useState(true);
  const [otherLinkOpen, setOtherLinkOpen] = React.useState(true);

  const handleInveniaLinkClick = () => {
    setInveniaLinkOpen(!inveniaLinkOpen);
  };

  const handleOtherLinkClick = () => {
    setOtherLinkOpen(!otherLinkOpen);
  };

  const subHeaderProps = {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 12,
    color: "#B3B3B3",
  };

  const linkProps = {
    fontSize: 14,
    lineHeight: 1,
    color: "#333333",
  };

  const inveniaLinks = [
    "그룹웨어",
    "PDM",
    "경비증빙 시스템",
    "도면배포 보안",
    "BI",
    "방문예약",
    "보안카메라",
    "CRM",
    "매뉴얼 사이트",
    "용어사전",
    "특허관리",
    "원격지원",
    "워크플로우",
  ];

  const otherLinks = [
    "한기대 이러닝",
    "LG Display 사이버 연수원",
    "복지몰(e제너두)",
    "복지볼(복지몰114)",
    "건강검진예약",
  ];

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: 280,
        },
      }}
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <Box role="presentation">
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <FontAwesomeIcon icon={faBookmark} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                ml: 0.5,
              }}
            >
              {t("appbar.bookmark.title")}
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleInveniaLinkClick}>
            <ListItemText primary="INVENIA LINK" primaryTypographyProps={subHeaderProps} />
            {inveniaLinkOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={inveniaLinkOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {inveniaLinks.map((value) => {
                return (
                  <ListItem key={value} disablePadding>
                    <ListItemButton key={value} sx={{ pl: 3, py: 0.7 }}>
                      <ListItemText primary={`${value}`} primaryTypographyProps={linkProps} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
          <ListItemButton onClick={handleOtherLinkClick}>
            <ListItemText primary="OTHER LINK" primaryTypographyProps={subHeaderProps} />
            {otherLinkOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={otherLinkOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {otherLinks.map((value) => {
                return (
                  <ListItem key={value} disablePadding>
                    <ListItemButton key={value} sx={{ pl: 3, py: 0.7 }}>
                      <ListItemText primary={`${value}`} primaryTypographyProps={linkProps} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
}
