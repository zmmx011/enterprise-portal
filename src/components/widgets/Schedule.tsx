import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { CalendarPicker, LocalizationProvider } from "@mui/lab";
import { Button, Card, Grid } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import koLocale from "date-fns/locale/ko";
import * as dateFns from "date-fns";

export default function Schedule() {
  const [date, setDate] = React.useState<Date | null>(new Date());

  const dataList = [
    {
      text: "경영진 주간회의",
      time: "14:00",
    },
    {
      text: "LGD CO E7 열가압합착기 현장 확인",
      time: "10:00",
    },
    {
      text: "H-CUT 10.5G ESC 현지 제작 현장 검수",
      time: "11:00",
    },
  ];

  return (
    <Grid item>
      <Card
        sx={{
          py: 2,
          m: 1,
          borderRadius: 1,
        }}
        color="primary"
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 1, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              오늘의 일정
            </Typography>
            <Typography
              sx={{
                ml: 0.2,
                fontSize: 12,
                color: "#8D8D8D",
              }}
            >
              {dateFns.format(new Date(), "MM월 dd일(E)", { locale: koLocale })}
            </Typography>
          </Box>
          <IconButton sx={{ p: 0 }}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ maxHeight: 80, overflow: "auto", px: 2 }}>
          {dataList.map((data, index) => (
            <Box key={index} sx={{ display: "flex" }}>
              <Box component="span" sx={{ display: "inline-block", mr: 0.8 }}>
                •
              </Box>
              <Box>
                <Typography variant="body2" color="#333333">
                  {data.text}
                </Typography>
                <Typography sx={{ fontSize: 11, color: "#B3B3B3" }}>{data.time}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
          <Box
            sx={{
              "& > div": {
                minWidth: 256,
              },
              "& > div > div, & > div > div > div, & .MuiCalendarPicker-root": {
                width: 256,
              },
              "& .PrivatePickersSlideTransition-root": {
                minHeight: 32 * 7,
              },
              '& .PrivatePickersSlideTransition-root [role="row"]': {
                margin: 0,
              },
              "& .MuiPickersDay-dayWithMargin": {
                margin: 0,
              },
              "& .MuiCalendarPicker-root": {
                alignItems: "center",
              },
            }}
          >
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
          </Box>
        </LocalizationProvider>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}>
          <Button variant="outlined" size="small">
            회의실 예약
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
