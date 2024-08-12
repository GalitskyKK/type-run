import create from 'zustand';

export const initialText =
  'This is a long sample text that exceeds 30 words. It is used to test the typing speed trainer application. Make sure this text is long enough to provide a good challenge for typing speed evaluation. You can add more content to make it even longer if needed.';

export interface TypingStore {
  text: string;
  userInput: string;
  errors: number;
  timeLeft: number;
  isFinished: boolean;
  startTimer: () => void;
  resetTimer: () => void;
  updateUserInput: (inputUpdater: string | ((input: string) => string)) => void;
  reset: () => void;
  calculateWPM: () => number;
}

export const useTypingStore = create<TypingStore>((set, get) => ({
  text: initialText,
  userInput: '',
  errors: 0,
  timeLeft: 30,
  isFinished: false,
  startTimer: () => {
    const interval = setInterval(() => {
      set((state) => {
        if (state.timeLeft <= 0) {
          clearInterval(interval);
          return { isFinished: true };
        }
        return { timeLeft: state.timeLeft - 1 };
      });
    }, 1000);
  },
  resetTimer: () => set({ timeLeft: 30, isFinished: false }),
  updateUserInput: (inputUpdater) => {
    set((state) => {
      const updatedInput =
        typeof inputUpdater === 'function' ? inputUpdater(state.userInput) : inputUpdater;
      return { userInput: updatedInput };
    });
  },
  reset: () => {
    set({
      userInput: '',
      errors: 0,
      timeLeft: 30,
      isFinished: false,
      text: initialText,
    });
  },
  calculateWPM: () => {
    const { userInput } = get();
    const wordsTyped = userInput.trim().split(/\s+/).length;
    return Math.round(wordsTyped / (30 / 60));
  },
}));
