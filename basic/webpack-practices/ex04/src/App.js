import "./assets/css/App.css";

const App = function () {
  const app = document.createElement("h1");
  app.className = "Header";
  app.textContent = "hello world2";
  return app;
};

export { App };
