import React from 'react';
import styled from 'styled-components';
import { useTypingStore } from '../store/useTypingStore';

const ResultsWrapper = styled.div`
  margin-top: 20px;
  font-family: 'Courier New', Courier, monospace;
`;

const Results: React.FC = () => {
  const { userInput, text } = useTypingStore();
  const correct = text === userInput;
  const resultText = correct
    ? 'Congratulations! You typed correctly.'
    : 'There were mistakes in your typing.';

  return (
    <ResultsWrapper>
      <h2>Results</h2>
      <p>{resultText}</p>
    </ResultsWrapper>
  );
};

export default Results;
