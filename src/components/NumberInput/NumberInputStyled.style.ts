// lib
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    inputStyled: {
      "&.MuiFormControl-root.MuiTextField-root": {
        marginRight: "10px",
      },
    },
  })
);
