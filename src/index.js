import React from 'react';
import ReactDOM from 'react-dom';
import ReactShadowRoot from 'react-shadow-root';
import Extension from './Extension';
import './global.css';
const injectWrapper = document.body;
const app = document.createElement('div');
app.id = 'jk--chrome--extension';
injectWrapper.classList.add('jk--chrome--extension--wrapper');
if (injectWrapper) injectWrapper.prepend(app);

// without #shadow-dom
// ReactDOM.render(<Extension />, document.getElementById('jk--chrome--extension'));
// with #shadow-dom
ReactDOM.render(<ReactShadowRoot><Extension /></ReactShadowRoot>, document.getElementById('jk--chrome--extension'));
