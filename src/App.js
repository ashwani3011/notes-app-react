import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";

//pages & component
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Search from "./pages/Search";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
// react

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          {/* <Navbar /> */}

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
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
