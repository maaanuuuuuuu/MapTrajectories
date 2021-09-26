import React from 'react';
import './App.css';
import { MapController } from './features/Map/MapController';
import trajectories from './trajectoires.json';
import { TrajectoriesContext } from './context/TrajectoriesContext';

function App() {
  return (
    <div className="App">
      <TrajectoriesContext.Provider value={trajectories}>
        <MapController />
      </TrajectoriesContext.Provider>
    </div>
  );
}

export default App;
