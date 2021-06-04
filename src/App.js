import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
function App() {
  return (
    <Router>
      <main className="mt-5">
        <Route path="/" component={Home} exact></Route>
        <Route path="/post/:id" component={SinglePost}></Route>
      </main>
    </Router>
  );
}

export default App;
