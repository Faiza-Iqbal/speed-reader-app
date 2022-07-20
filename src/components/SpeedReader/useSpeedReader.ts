// lib
import { useState } from "react";
import { generateSlug } from "random-word-slugs";
import { useMediaQuery } from "@mui/material";

import { mobile } from "../../styles/colorVariables";

let intervalId: number | undefined = undefined;

export const useSpeedReader = () => {
  const [wordCount, SetWordCount] = useState("");
  const [wordPerMin, SetwordPerMin] = useState("");
  const [word, setWord] = useState("");
  const [readerState, setReaderState] = useState(false);
  const isMobile = useMediaQuery(mobile);

  let displayedWordCount = 0;

  const handleNumberOfWords = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetWordCount(e.target.value);
  };

  const handleWordsPerMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetwordPerMin(e.target.value);
  };

  const startReader = () => {
    setReaderState(true);

    intervalId = window.setInterval(function () {
      const slug = generateSlug(1, { format: "title" });

      setWord(slug);
      displayedWordCount++;

      if (displayedWordCount >= parseInt(wordCount)) resetReader();
    }, Math.round((60 * 1000) / parseInt(wordPerMin)));
  };

  const stopReader = () => {
    clearInterval(intervalId);
    setReaderState(false);
  };

  const resetReader = () => {
    clearInterval(intervalId);
    SetWordCount(wordCount);
    SetwordPerMin(wordPerMin);
    setWord(word);
    setReaderState(readerState);
    displayedWordCount = 0;
    setReaderState(false);
  };

  return {
    word,
    readerState,
    wordCount,
    wordPerMin,
    isMobile,
    handleNumberOfWords,
    handleWordsPerMin,
    startReader,
    stopReader,
  };
};
