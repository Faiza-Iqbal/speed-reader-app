// lib
import { createStyles, makeStyles } from "@mui/styles";

import { primary_dark } from "../../styles/colorVariables";

type Props = {
  cardColor: string;
};

export const useStyles = makeStyles((theme) =>
  createStyles({
    displayBox: {
      border: `2px solid ${primary_dark}`,
      maxWidth: "250px",
      width: "100%",
      padding: "40px 0px",
      background: (props: Props) => props.cardColor,
    },

    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    },
  })
);
