import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import AppBar from "components/AppBar";
import Box from "@mui/material/Box";
import Profile from "components/widgets/Profile";
import Notice from "components/widgets/Notice";
import Schedule from "../components/widgets/Schedule";
import Helpdesk from "../components/widgets/Helpdesk";
import ErpNavi from "../components/widgets/ErpNavi";
import HR from "../components/widgets/HR";
import TogetherLounge from "../components/widgets/TogetherLounge";
import Notification from "../components/widgets/Notification";
import Search from "../components/widgets/Search";
import Banner from "../components/widgets/Banner";

export default function Main() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "primary.light" }}>
      <AppBar />
      <Container maxWidth="lg" disableGutters sx={{ bgcolor: "#fa4343" }}>
        <Box sx={{ my: "13px" }}>
          <Typography sx={{ fontSize: 12, color: "#615F5F", lineHeight: "14px" }}>전사 Portal</Typography>
        </Box>
        <Grid container>
          <Grid item xs={3}>
            <Grid container direction="column">
              <Grid item>
                <Profile />
              </Grid>
              <Grid item>
                <Schedule />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item>
                <Notice />
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <Helpdesk />
                  </Grid>
                  <Grid item xs={6}>
                    <ErpNavi />
                  </Grid>
                  <Grid item xs={6}>
                    <HR />
                  </Grid>
                  <Grid item xs={6}>
                    <TogetherLounge />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column">
              <Grid item>
                <Notification />
              </Grid>
              <Grid item>
                <Search />
              </Grid>
              <Grid item>
                <Banner />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
