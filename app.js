const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1" }, "Happy days ra mawa"),
  React.createElement("h2", { id: "child2" }, "sorry days ra mawa"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
