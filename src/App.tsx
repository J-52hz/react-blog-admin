import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/index';

function App() {
  const outlet = useRoutes(routes);
  return <div className="App">{outlet}</div>;
}

export default App;
