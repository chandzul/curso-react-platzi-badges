import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";
import BadgeDetails from "../pages/BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
