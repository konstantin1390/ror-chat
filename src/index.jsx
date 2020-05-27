import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/*window.Chat = {
  init: (element, hasUserAuth, lang='en', settings) => fetch(settings)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              ReactDOM.render(<Chat hasUserAuth={hasUserAuth} lang={lang} settings={data} />, element);
          }).catch(() => {
             ReactDOM.render(<Chat hasUserAuth={hasUserAuth} lang={lang} settings={{}} />, element);
          })
};*/

ReactDOM.render(<Chat hasUserAuth lang={'en'} settings={{}} />, document.getElementById('root'));
