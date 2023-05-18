import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

export default function TodoFormtemplate(props) {
  const headerStyle = {
    width: "100%",
    textAlign: "center",
    bgcolor: "#5996e9",
    borderTopLeftRadius: 8, // Add rounded edges to the top corners
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8, // Add rounded edges to the top corners
    borderBottomRightRadius: 8,
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={headerStyle} // Apply styles to the header
      >
        What should be the next activity?
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom>
        Time:
      </Typography>
      <TextField
        type="text"
        value={props.time}
        onChange={props.getValueTime}
        variant="outlined"
        fullWidth
        inputProps={{
          placeholder: "Enter time ex: 23",
          style: { color: "#c6eef6" },
        }}
        onBlur={props.validateInputTime}
        error={props.isValidTime === false && props.isValidTime !== ""}
        helperText={
          props.isTimeTouched &&
          !props.isValidTime &&
          "Invalid, please type a number"
        }
      />
      <RadioGroup
        value={props.outputTimeType}
        onChange={(e) => props.setOutputTimeType(e.target.value)}
        row
      >
        <FormControlLabel value="minutes" control={<Radio />} label="Minutes" />
        <FormControlLabel value="hours" control={<Radio />} label="Hours" />
      </RadioGroup>

      <Typography variant="h6" component="h2" gutterBottom>
        What I need to do:
      </Typography>
      <TextField
        type="text"
        value={props.description}
        onChange={props.getValueDescription}
        variant="outlined"
        fullWidth
        onBlur={props.validateInputDescription}
        error={
          props.IsValidDescription === false && props.IsValidDescription !== ""
        }
        helperText={
          props.isDescriptionTouched &&
          !props.IsValidDescription &&
          "Please enter what you would like to do!"
        }
        inputProps={{
          placeholder: "Enter what you are supposed to do",
          style: { color: "#c6eef6" },
        }}
      />

      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!props.formIsValid}
          onClick={props.handleSubmit}
        >
          Add To Do
        </Button>
      </Box>
    </form>
  );
}
