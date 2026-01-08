import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import React from "react";

function MyApp() {
    return (
        <div>
            <h1>custom app | chai </h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)

createRoot(document.getElementById("root")).render(
    anotherElement
);
