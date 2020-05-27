import React from 'react';
import ReactDOM from 'react-dom';
import RootModule from './client/modules/rootModule/rootModule';

const head = document.getElementsByTagName('head')[0];
const meta = document.createElement('meta');
const link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://647.devshell.site/smart-bot/style.css';
meta.name = 'viewport';
meta.setAttribute(
  'content',
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
);
head.insertAdjacentElement('afterbegin', link);
head.appendChild(meta);

const body = document.getElementsByTagName('body')[0];

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('orientationchange', () => hideKeyboard(body), false);

window.SmartChatBotApp = {
  init: ({ locale = 'en', config, clientData }) => {
    const chat = document.getElementById('SmartChatBotApp');
    if (chat) chat.remove();
    const block = document.createElement('div');
    block.id = 'SmartChatBotApp';
    body.appendChild(block);
    fetch(config)
      .then(response => response.json())
      .then(data => {
        ReactDOM.render(<RootModule />, block);
      })
      .catch(() => {
        ReactDOM.render(<RootModule />, block);
      });
  },
  onLogout: () => {
    const chat = document.getElementById('SmartChatBotApp');
    chat && chat.remove();
  },
};

ReactDOM.render(<RootModule />, document.getElementById('root'));
