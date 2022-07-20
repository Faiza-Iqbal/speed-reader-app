// lib
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    },

    verticalAligned: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    },
  })
);
