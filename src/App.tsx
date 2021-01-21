import React from 'react';
import { LanguageList } from './language-list/LangiageList';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <LanguageList />
    </div>
  );
};

export default App;
