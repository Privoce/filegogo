import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GithubCorner from 'react-github-corner';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GithubCorner href="https://github.com/a-wing/filegogo" bannerColor="#64CEAA" octoColor="#FFF" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
