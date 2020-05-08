import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Layout'
import HomePage from "../pages/HomePage"
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";
import NotFound from '../pages/NotFound';

// class App extends React.Component {
//   render() {
//     return <div className="">App</div>;
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
