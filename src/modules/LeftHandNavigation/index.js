import React from "react";

import { NAVIGATION_ITEMS } from "./../../constants/navigation-items";
import Navigation from "./styles";

const LeftHandNavigation = () => {
  return (
    <Navigation>
      {NAVIGATION_ITEMS.map(({ name, path }) => (
        <Navigation.Item key={name} href={path}>
          {name}
        </Navigation.Item>
      ))}
    </Navigation>
  );
};

export default LeftHandNavigation;
