import React from "react";
import { Box, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import TodoForm from "./TodoForm";

export default function ModalUi(props) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#0c0f1f",
    border: "2px solid #000",
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    p: 3,
    color: "#c6eef6",
    fontFamily: "Roboto, sans-serif",
  };
  // props.onOpenHandler(handleOpen);

  const buttonStyle = {
    marginBottom: 16,
  };

  return (
    <React.Fragment>
      <Button onClick={props.onOpenHandler} style={buttonStyle}>
        Add what to do next
      </Button>

      <Modal
        open={props.isOpen}
        onClose={props.onCloseHandler}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={modalStyle}>
          <TodoForm onClose={props.onCloseHandler}></TodoForm>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
