import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  let pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <NavBar />
      <LoadingBar
        color="red"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} />
    </div>
  );
};

export default App;
