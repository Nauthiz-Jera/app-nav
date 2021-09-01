import React from "react";
import { navigateToUrl } from "single-spa";

import { NAVIGATION_ITEMS } from "./../../constants/navigation-items";
import useNavState from "./../../hooks/useNavState";
import Navigation from "./styles";

const LeftHandNavigation = () => {
  const [{ isMenuOpen }, navigationStore] = useNavState();

  const singleSpaNavigation = (path) => (e) => {
    e.preventDefault();
    navigateToUrl(path);
    return false;
  };

  const toggleMenu = () => {
    navigationStore.setNavigationState({
      isMenuOpen: !isMenuOpen,
    });
  };

  return (
    <Navigation isOpen={isMenuOpen}>
      <Navigation.Button isOpen={isMenuOpen} onClick={toggleMenu}>
        {isMenuOpen ? "close" : "open"}
      </Navigation.Button>
      {isMenuOpen &&
        NAVIGATION_ITEMS.map(({ name, path }) => (
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
