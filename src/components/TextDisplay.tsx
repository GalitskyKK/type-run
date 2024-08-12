import React from 'react';
import styled from 'styled-components';
import { useTypingStore } from '../store/useTypingStore';

const TextWrapper = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  white-space: pre-wrap;
  position: relative;
`;

const Cursor = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  border-left: 2px solid #00ff00;
  margin-left: -2px;
  animation: blink 1s steps(2, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;

const TextDisplay: React.FC = () => {
  const { text, userInput } = useTypingStore();

  const renderText = () => {
    return text.split('').map((char, index) => {
      let color = '#ffffff';
      if (index < userInput.length) {
        color = char === userInput[index] ? '#00ff00' : '#ff0000';
      }
      return (
        <span key={index} style={{ color }}>
          {char}
        </span>
      );
    });
  };

  return (
    <TextWrapper>
      {renderText()}
      <Cursor style={{ left: `${userInput.length * 10}px` }} />
    </TextWrapper>
  );
};

export default TextDisplay;
