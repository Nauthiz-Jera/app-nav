import { useState, useEffect } from "react";

import { navigationStore } from "./../store";

const useNavState = () => {
  const [navState, setNavState] = useState(navigationStore.initialState);

  useEffect(() => {
    navigationStore.subscribe(setNavState);
    navigationStore.init();
  }, []);

  return [navState, navigationStore];
};

export default useNavState;
