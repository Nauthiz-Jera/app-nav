import React, { useEffect } from "react";

import { navigationStore } from "./../store";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Navigation";
}

const withClosedNavigation = (Component) => {
  const WrappedComponent = (props) => {
    useEffect(() => {
      navigationStore.init();
      navigationStore.setNavigationState({ isMenuOpen: false });
    }, []);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withClosedNavigation(${getDisplayName(
    Component
  )})`;

  return WrappedComponent;
};

export default withClosedNavigation;
