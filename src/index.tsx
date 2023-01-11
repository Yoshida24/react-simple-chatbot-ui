import ReactDOM from 'react-dom/client';
import ChatBot from "react-simple-chatbot";

window.chatbot = window.chatbot ?? {}
window.chatbot.embed = (props: any) => {
  const id = "root";

  const rootElm = document.createElement("div");
  rootElm.id = id;
  const node = document.getElementsByTagName("body")[0];
  node.append(rootElm);

  const root = ReactDOM.createRoot(document.getElementById(id) as HTMLElement);
  root.render(<ChatBot {...props} />);
};
