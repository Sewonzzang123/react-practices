import "./App.scss";
import logo from "./logo.svg";

const App = function () {
  const app = document.createElement("h1");
  app.className = "Header";
  app.innerHTML = `<header class="App-header">
      <img src="${logo}" class="App-logo" alt="logo" />
      <p>Hello World</p>
    </header>`;
  return app;
};

export { App };