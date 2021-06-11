import useLocalStorage from "./useLocalStorage";

const useDarkMode = (theme) => {
  const [value, setValue] = useLocalStorage("mode", theme);
  const handleToggle = (newTheme) => {
    setValue(newTheme);
  };
  return [value, setValue, handleToggle];
};

export default useDarkMode;
