import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../theme/ColorModeContext";

interface SettingDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface groupButtonProps {
  icon?: React.ReactNode;
  text?: string;
  value?: string;
}

export default function SettingDrawer({ drawerOpen, setDrawerOpen }: SettingDrawerProps) {
  const { toggleColorMode, mode } = React.useContext(ColorModeContext);
  const { t, i18n } = useTranslation();

  const [lang, setLanguage] = React.useState<string | null>("ko");

  const handleLanguage = (event: React.MouseEvent<HTMLElement>, value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const titleTypo = (text: string) => (
    <Typography
      gutterBottom
      sx={{
        m: "20px 0px 10px",
        color: "rgb(111, 126, 140)",
        fontWeight: "700",
        fontSize: "0.6875rem",
        textTransform: "uppercase",
        letterSpacing: "0.08rem",
      }}
    >
      {text}
    </Typography>
  );

  const toggleGroup = (
    groupButtons: groupButtonProps[],
    value: string | null,
    handler: (event: React.MouseEvent<HTMLElement>, value: any) => void
  ) => (
    <ToggleButtonGroup
      value={value}
      onChange={handler}
      exclusive
      fullWidth
      sx={{
        borderRadius: "10px",
      }}
    >
      {groupButtons.map((button, index) => (
        <ToggleButton
          value={button.value}
          key={index}
          sx={{
            textTransform: "none",
            "& .MuiSvgIcon-root": { mr: 1 },
          }}
        >
          {button.icon}
          {button.text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );

  return (
    <Drawer
      PaperProps={{
        sx: {
          borderRadius: "10px 0px 0px 10px",
          width: 360,
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
          <Typography>{t("appbar.menu.settings")}</Typography>
          <IconButton>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ px: 2 }}>
          {titleTypo("Mode")}
          {toggleGroup(
            [
              { icon: <LightModeIcon />, text: "Light", value: "light" },
              { icon: <DarkModeIcon />, text: "Dark", value: "dark" },
            ],
            mode,
            toggleColorMode
          )}
          {titleTypo("Language")}
          {toggleGroup(
            [
              { text: "한국어", value: "ko" },
              { text: "English", value: "en" },
              { text: "中文", value: "ch" },
            ],
            lang,
            handleLanguage
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
