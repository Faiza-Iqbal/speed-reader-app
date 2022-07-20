// lib
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

// src
import { cardColors, main_light } from "../../styles/colorVariables";
import { useStyles } from "./DisplayCardStyled.style";

type DisplayCardType = {
  word: string;
};

const DisplayCard = ({ word }: DisplayCardType) => {
  const [cardColor, setCardColor] = useState(`${main_light}`);
  const props = { cardColor: cardColor };
  const classes = useStyles(props);

  useEffect(() => {
    setCardColor(cardColors[Math.floor(Math.random() * cardColors.length)]);
  }, [word]);

  return (
    <Box className={`${classes.marginAutoContainer} ${classes.displayBox}`}>
      <Typography variant="h4">{word}</Typography>
    </Box>
  );
};
export default DisplayCard;
