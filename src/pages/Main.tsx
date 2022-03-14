import * as React from 'react';
import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from "@mui/material";
import AppBar from "components/AppBar";
import Box from "@mui/material/Box";

export default function Main() {
  return (
      <Grid container >
        <Grid item xs={12}>
          <AppBar/>
        </Grid>
        <Grid
            item
            xs={12}
            container
            sx={{
              minHeight: "100vh",
              bgcolor: 'primary.light',
            }}
        >
          <Container maxWidth="xl" sx={{
            bgcolor: 'primary.light',
          }}>
            <Box sx={{my: 4}} component="div">
              <Card sx={{ minWidth: 275 }} color="primary">
                <CardContent>
                  <Typography variant="h5" component="div">
                    hello
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
                    adjective
                  </Typography>
                  <Typography variant="body2" component="div">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Container>
        </Grid>
      </Grid>
  );
}
