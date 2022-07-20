// lib
import { createStyles, makeStyles } from "@mui/styles";

import { main } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    actionButton: {
      "&.MuiButtonBase-root": {
        border: `2px solid ${main}`,
        marginTop: "50px",
      },
    },
  })
);
