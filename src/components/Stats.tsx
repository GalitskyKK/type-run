import React from 'react';
import styled from 'styled-components';
import { useTypingStore } from '../store/useTypingStore';

const StatsWrapper = styled.div`
  margin-top: 20px;
  font-family: 'Courier New', Courier, monospace;
`;

const Stats: React.FC = () => {
  const { timeLeft, calculateWPM, isFinished } = useTypingStore();
  const wpm = calculateWPM();

  return (
    <StatsWrapper>
      <div>Time Left: {timeLeft} seconds</div>
      {isFinished && <div>Words Per Minute (WPM): {wpm}</div>}
    </StatsWrapper>
  );
};

export default Stats;
