// lib
import { Box, Container } from "@mui/material";

// src
import ActionButton from "../ActionButton";
import DisplayCard from "../DisplayCard";
import Header from "../Header/Header";
import NumberInput from "../NumberInput";
import { useSpeedReader } from "./useSpeedReader";
import { MIN_WORD_COUNT, MIN_WORD_PER_MIN } from "../../constants";
import { useStyles } from "./SpeedReaderStyled.style";

const SpeedReader = () => {
  const classes = useStyles();
  const {
    word,
    readerState,
    wordCount,
    wordPerMin,
    isMobile,
    handleNumberOfWords,
    handleWordsPerMin,
    startReader,
    stopReader,
  } = useSpeedReader();

  return (
    <Box>
      <Header>
        <h1> Speed Reader</h1>
      </Header>
      <Container sx={{ p: 8 }}>
        {!word && (
          <Box
            className={
              isMobile ? classes.verticalAligned : classes.marginAutoContainer
            }
          >
            <NumberInput
              handleChange={handleNumberOfWords}
              inputProps={{
                min: 2000,
              }}
              helperText="Minimum word count should be 2000"
            />
            <NumberInput
              handleChange={handleWordsPerMin}
              inputProps={{ min: 200 }}
              helperText="Minimum words per min should be 200"
            />
          </Box>
        )}
        {(readerState || word) && <DisplayCard word={word} />}
        <Box className={classes.marginAutoContainer}>
          {!readerState && (
            <ActionButton
              isDisabled={
                !(
                  parseInt(wordCount) >= MIN_WORD_COUNT &&
                  parseInt(wordPerMin) >= MIN_WORD_PER_MIN
                )
              }
              handleButtonAction={startReader}
              label="Start"
            />
          )}
          {readerState && wordCount && (
            <ActionButton
              isDisabled={false}
              handleButtonAction={stopReader}
              label="Stop"
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};
export default SpeedReader;
