import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";

// class App extends React.Component {
//   render() {
//     return <div className="">App</div>;
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgesNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
