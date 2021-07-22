import "./assets/scss/App.scss";

const App = function () {
  const app = document.createElement("h1");
  app.className = "Header";
  app.textContent = "hello world";
  return app;
};

export { App };
