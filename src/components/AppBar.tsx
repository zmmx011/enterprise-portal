import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useKeycloak } from "@react-keycloak/web";
import { faBookmark, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookmarkDrawer from "./drawer/BookmarkDrawer";

export default function DefaultAppBar() {
  const { keycloak } = useKeycloak();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleLogout = () => {
    keycloak.logout({ redirectUri: process.env.BASE_URL });
  };

  const title = (fontWeight: number, text: string) => (
    <Typography
      variant="h6"
      sx={{
        fontFamily: "Poppins",
        fontWeight: fontWeight,
        letterSpacing: 1,
      }}
    >
      {text}
    </Typography>
  );

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Left Side */}
          <Box sx={{ mr: 1, display: { md: "flex" } }}>{title(600, "INVENIA")}</Box>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>{title(300, "Enterprise Portal")}</Box>
          {/* Right Side */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Bookmark */}
            <IconButton color="inherit" size="small" sx={{ ml: 1 }} onClick={handleDrawerOpen}>
              <FontAwesomeIcon icon={faBookmark} color="#8D8D8D" />
            </IconButton>
            {/* Logout */}
            <IconButton color="inherit" size="small" sx={{ ml: 1 }} onClick={handleLogout}>
              <FontAwesomeIcon icon={faPowerOff} color="#8D8D8D" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <BookmarkDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </Box>
  );
}
