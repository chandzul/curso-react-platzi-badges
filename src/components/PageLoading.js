import React from "react";

import "./styles/PageLoading.css";
import Loader from "../components/Loader";

class PageLoading extends React.Component {
  render() {
    return (
      <div>
        <span className="PageLoading">
          <Loader />
        </span>
      </div>
    );
  }
}

export default PageLoading;
