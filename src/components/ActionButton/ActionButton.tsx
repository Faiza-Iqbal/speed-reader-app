// lib
import { Button } from "@mui/material";

import { useStyles } from "./ActionButtonStyled.style";

type ActionButtonType = {
  isDisabled: boolean;
  handleButtonAction: () => void;
  label: string;
};

const ActionButton = ({
  isDisabled,
  handleButtonAction,
  label,
}: ActionButtonType) => {
  const classes = useStyles();

  return (
    <Button
      disabled={isDisabled}
      onClick={handleButtonAction}
      className={classes.actionButton}
    >
      {label}
    </Button>
  );
};
export default ActionButton;
