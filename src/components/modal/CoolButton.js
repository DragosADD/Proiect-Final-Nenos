import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "2px solid #000",
  borderRadius: "50%",
  padding: "8px",
  minWidth: 0,
  width: "40px",
  height: "40px",
  marginRight: "8px",
  "& .MuiButton-startIcon": {
    marginRight: 0,
  },
}));

export default function AddButton({ onClick }) {
  return (
    <StyledButton variant="outlined" color="primary" onClick={onClick}>
      Add
    </StyledButton>
  );
}
