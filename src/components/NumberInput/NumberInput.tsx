// lib
import { TextField } from "@mui/material";

import { useStyles } from "./NumberInputStyled.style";

type HandleChangeType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: { min: number };
  helperText: string;
};

const NumberInput = ({
  handleChange,
  inputProps,
  helperText,
}: HandleChangeType) => {
  const classes = useStyles();

  return (
    <TextField
      type="number"
      className={classes.inputStyled}
      helperText={helperText}
      inputProps={inputProps}
      onChange={handleChange}
    />
  );
};
export default NumberInput;
