import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
// import TodoList from "./TodoList";
import ModalUi from "./components/modal/ModalUi";
import TodoItem from "./components/Layout/TodoItem";

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
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, marginLeft: { xs: "2rem", md: "2rem" } }}
          >
            Your To-Do App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
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
