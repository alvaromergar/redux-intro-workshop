import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function layout(WrappedComponent) {
  WrappedComponent.displayName = `layout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <Header />
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default layout;
