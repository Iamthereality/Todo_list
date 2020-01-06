import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App/App";

const appContainer = document.querySelector('#app');
ReactDom.render(<App/>, appContainer);