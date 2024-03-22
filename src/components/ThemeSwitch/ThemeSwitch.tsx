import { useState } from "react";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  const defaultTheme =
    localStorageTheme || (systemSettingDark.matches ? "dark" : "light");
  const [currentThemeSetting, setCurrentThemeSetting] = useState(defaultTheme);

  const handleSwitchTheme = () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    setCurrentThemeSetting(newTheme);

    localStorage.setItem("theme", newTheme);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", newTheme);
    }
  };
  const buttonText =
    currentThemeSetting === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme";
  return (
    <button
      className={styles.button}
      onClick={handleSwitchTheme}
      aria-label={buttonText}
    >
      {currentThemeSetting === "light" ? "🌜" : "🌞"}
    </button>
  );
};

export default ThemeSwitch;
