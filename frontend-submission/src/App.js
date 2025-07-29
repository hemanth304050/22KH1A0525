import React from "react";
import UrlForm from "./components/UrlForm";
import Analytics from "./components/Analytics";

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>URL Shortener</h2>
      <UrlForm />
      <Analytics />
    </div>
  );
};

export default App;
