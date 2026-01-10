import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>custom app | chai </h1>
    </div>
  );
}
/* const reactElement = {  The code of this section will not get rendered because 
    type: 'a',             this is my custom react and for this i have custom renderer.               
    props: {               
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}*/

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById("root")).render(reactElement);
