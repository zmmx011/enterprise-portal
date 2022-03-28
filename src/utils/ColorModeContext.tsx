import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

export const ColorModeContext = React.createContext({
  toggleColorMode: (event: React.MouseEvent<HTMLElement>, value: string) => {
    console.log("Selected Theme : " + value);
  },
  mode: "light"
});

export const ColorModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (event: React.MouseEvent<HTMLElement>, value: string) => {
        setMode(value);
      },
      mode
    }),
    [mode]
  );

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
