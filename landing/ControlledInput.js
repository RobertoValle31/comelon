import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useController } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    background: "white",
    margin: theme.spacing(3),
  },
}));

const ControlledInput = ({
  name,
  control,
  defaultControllValue,
  required,
  type,
  placeholder,
  rows,
  multiline,
}) => {
  const { field } = useController({
    name,
    control,
    shouldUnregister: true,
    defaultValue: defaultControllValue,
  });

  const classes = useStyles();

  return (
    <TextField
      type={type}
      inputProps={field}
      variant="outlined"
      placeholder={placeholder}
      rows={rows}
      multiline={multiline}
      required={required}
      InputProps={{
        className: classes.inputField,
      }}
    />
  );
};

export default ControlledInput;
