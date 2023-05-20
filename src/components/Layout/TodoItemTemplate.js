import React from "react";
import { Box, Typography, IconButton, Checkbox } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const TodoItemTemplate = (props) => {
  const isCheckbox = true;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        p: 2,
        mb: 2,
        bgcolor: "#f7f7f7",
        borderRadius: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2, // Increase margin-bottom
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
          <AccessTimeIcon />
          <Typography variant="subtitle1" sx={{ mr: 2, ml: 1 }}>
            {props.duration}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={props.onUpdate}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mr: 3,
          justifyContent: "space-between",
        }}
      >
        {isCheckbox && (
          <Box sx={{ alignSelf: "flex-start" }}>
            <Checkbox
              checked={props.isChecked}
              onChange={props.onCheckboxChange}
            />
          </Box>
        )}

        <Box sx={{ alignSelf: "flex-end" }}>
          <Typography variant="body1">{props.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoItemTemplate;
