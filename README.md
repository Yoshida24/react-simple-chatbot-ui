# chatbot
Embed customizable chat bot user interface.

### How to deploy
Load `build/static/js/main.xxxxxxxx.js` on your web site.

### How to use

```js
window.chatbot.embed({
  headerTitle: 'Yout header message',
  recognitionEnable: true,
  floating: true,
  steps: [
    {
      id: "1",
      message: "Welcome to react chatbot!",
      trigger: "2",
    },
    {
      id: "2",
      message: "Bye!",
      end: true,
    },
  ],
});
```

### API
https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot