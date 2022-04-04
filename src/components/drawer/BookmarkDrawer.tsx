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
import { List, ListSubheader } from "@mui/material";

interface BookmarkDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookmarkDrawer({ drawerOpen, setDrawerOpen }: BookmarkDrawerProps) {
  const { t } = useTranslation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

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
          <IconButton>
            <CloseIcon fontSize="small" onClick={toggleDrawer(false)} />
          </IconButton>
        </Box>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        />
      </Box>
    </Drawer>
  );
}
