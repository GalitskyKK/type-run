import React from 'react';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Stats from './components/Stats';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <div>
      <TextDisplay />
      <TextInput />
      <Stats />
      <Results />
    </div>
  );
};

export default App;
