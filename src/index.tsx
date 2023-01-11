import React from 'react';
import ReactDOM from 'react-dom/client';
//import ChatBot from './ChatBot';
import ChatBot from "react-simple-chatbot";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);/*
const props = {
  steps: [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ]
};*/

root.render(
  <React.StrictMode>
    <ChatBot
      steps={[
        {
          id: "hello-world",
          message: "Hello World!",
          end: true,
        },
      ]}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
