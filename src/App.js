import React from "react";
import { Typography, Container } from "@mui/material";

import ModalUi from "./components/modal/ModalUi";
import TodoItem from "./components/Layout/TodoItem";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderApp from "./components/Layout/HeaderApp";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [add, setAdd] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // function RenderItems({ giveProp }) {
  //   setAdd(true);
  //   return <TodoItem renderCase={giveProp} open={handleOpen} />;
  // }

  // function RenderNothing() {
  //   setAdd(false);
  //   return (
  //     <div style={{ textAlign: "center", marginTop: "50px" }}>
  //       <Typography variant="h2" color="primary" component="h1" gutterBottom>
  //         Not found
  //       </Typography>
  //     </div>
  //   );
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <React.Fragment>
          {" "}
          <TodoItem renderCase="all" open={handleOpen} />
          <ModalUi
            onOpenHandler={handleOpen}
            onCloseHandler={handleClose}
            isOpen={isOpen}
          />
        </React.Fragment>
      ),
    },
    {
      path: "/to-do",
      element: (
        <React.Fragment>
          {" "}
          <TodoItem renderCase="to-be-done" open={handleOpen} />
          <ModalUi
            onOpenHandler={handleOpen}
            onCloseHandler={handleClose}
            isOpen={isOpen}
          />
        </React.Fragment>
      ),
    },
    {
      path: "/done",
      element: (
        <React.Fragment>
          {" "}
          <TodoItem renderCase="done" open={handleOpen} />
        </React.Fragment>
      ),
    },
    {
      path: "*",
      element: (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h2" color="primary" component="h1" gutterBottom>
            Not found
          </Typography>
        </div>
      ),
    },
  ]);

  return (
    <React.Fragment>
      <HeaderApp></HeaderApp>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)",
          marginTop: "74px", // Adjust the top margin to match the height of the AppBar
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </React.Fragment>
  );
}
