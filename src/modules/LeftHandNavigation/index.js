import React from "react";
import { navigateToUrl } from "single-spa";

import { NAVIGATION_ITEMS } from "./../../constants/navigation-items";
import Navigation from "./styles";

const LeftHandNavigation = () => {
  const singleSpaNavigation = (path) => (e) => {
    e.preventDefault();
    navigateToUrl(path);
    return false;
  };
  return (
    <Navigation>
      {NAVIGATION_ITEMS.map(({ name, path }) => (
        <Navigation.Item
          key={name}
          onClick={singleSpaNavigation(path)}
          href={path}
        >
          {name}
        </Navigation.Item>
      ))}
    </Navigation>
  );
};

export default LeftHandNavigation;
