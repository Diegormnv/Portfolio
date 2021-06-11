import { useState } from "react";

const useLocalStorage = (key, theme) => {
  const [storeTheme, setStoreTheme] = useState(() => {
    const mode = window.localStorage.getItem(key);
    return mode ? JSON.parse(mode) : theme;
  });
  const setMode = (mode) => {
    setStoreTheme(mode);
    window.localStorage.setItem(key, JSON.stringify(mode));
  };
  return [storeTheme, setMode];
};

export default useLocalStorage;
