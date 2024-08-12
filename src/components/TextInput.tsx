import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTypingStore } from '../store/useTypingStore';

const InputWrapper = styled.div`
  margin-top: 20px;
`;

const InputField = styled.textarea`
  width: 100%;
  height: 100px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  border: 2px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
`;

const TextInput: React.FC = () => {
  const { userInput, updateUserInput, text, reset, isFinished, startTimer, resetTimer } =
    useTypingStore();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isFinished) {
      startTimer();
    }
  }, [isFinished, startTimer]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInput(event.target.value);
  };

  const handleReset = () => {
    reset();
    resetTimer();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <InputWrapper>
      <InputField ref={inputRef} value={userInput} onChange={handleChange} disabled={isFinished} />
      {isFinished && <button onClick={handleReset}>Start Over</button>}
    </InputWrapper>
  );
};

export default TextInput;
