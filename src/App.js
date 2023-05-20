import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
// import TodoList from "./TodoList";
import ModalUi from "./components/modal/ModalUi";
import TodoItem from "./components/Layout/TodoItem";
// import { Link } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <label>Your to do App</label>
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
                    href="/todo"
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
      <Container maxWidth="lg" style={{ marginTop: "1rem" }}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <Grid item xs={12} md={8} lg={6} xl={4}>
            {/* Update the grid item configuration */}
            <TodoItem open={handleOpen}></TodoItem>
          </Grid>
          <Grid item xs={12}>
            <ModalUi
              onOpenHandler={handleOpen}
              onCloseHandler={handleClose}
              isOpen={isOpen}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
