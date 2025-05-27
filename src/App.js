import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    // Start progress
    this.setState({ progress });

    // Simulate loading steps (optional)
    if (progress === 30) {
      setTimeout(() => this.setState({ progress: 70 }), 500); // jump to 70%
    }
    if (progress === 70) {
      setTimeout(() => this.setState({ progress: 100 }), 500); // jump to 100%
    }
  };

  render() {
    let pageSize = 9;
    let apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <NavBar />
        <LoadingBar
          color="red"
          height={3}
          progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 0 })}
        />
        <News apiKey={apiKey} setProgress={this.setProgress} pageSize={pageSize} />
      </div>
    );
  }
}
