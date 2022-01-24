import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";

//pages & component
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Search from "./pages/Search";

import Navbar from "./components/Navbar";

// react

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/notes/:id">
            <Notes />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
