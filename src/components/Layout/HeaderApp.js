import { AppBar, Toolbar, Container, Box, Button, Grid } from "@mui/material";

export default function HeaderApp() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <label>To Do List</label>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  ml: "-5rem",
                }}
              >
                <Button component="a" href="/" color="inherit" sx={{ mx: 1 }}>
                  All
                </Button>
                <Button
                  component="a"
                  href="/done"
                  color="inherit"
                  sx={{ mx: 1 }}
                >
                  Done
                </Button>
                <Button
                  component="a"
                  href="/to-do"
                  color="inherit"
                  sx={{ mx: 1 }}
                >
                  To-Do
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
