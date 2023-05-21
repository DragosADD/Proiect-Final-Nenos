import React from "react";
import { Box, Typography, IconButton, Checkbox } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const TodoItemTemplate = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        p: 2,
        mb: 2,
        bgcolor: "#f7f7f7",
        borderRadius: 8,
        marginLeft: "auto",
        marginRight: "auto",

        overflow: "hidden",
      }}
    >
      {props.isDone && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_light-green_checkmark.svg/2048px-Eo_circle_light-green_checkmark.svg.png"
          alt=""
          style={{
            width: "25%",
            height: "auto",
            opacity: 0.7,
            position: "absolute",
            top: "60%",
            // transform: "translateY(-20%)",
            transform: "translateX(-40%)",
          }} // Adjust opacity and size, position the image using top and transform properties
        />
      )}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
          <AccessTimeIcon />
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            {props.duration}
          </Typography>
        </Box>
        <Box>
          {!props.isDone && (
            <IconButton onClick={props.onUpdate}>
              <EditIcon />
            </IconButton>
          )}

          <IconButton onClick={props.onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          mt: 3, // Add margin-top to create space between image and content
        }}
      >
        <Box sx={{ alignSelf: "flex-start" }}>
          <Checkbox checked={props.isChecked} onChange={props.onBoxChange} />
        </Box>

        <Box sx={{ alignSelf: "flex-end", ml: 1 }}>
          <Typography variant="body1">{props.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoItemTemplate;
