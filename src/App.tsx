// App.tsx
import React from 'react';
import CanvasComponent from './components/CanvasComponent';
import BallMenu from './components/BallMenu';

const App: React.FC = () => {
  return (
    <div className="app">
      <CanvasComponent />
      <BallMenu />
    </div>
  );
};

export default App;
