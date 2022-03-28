import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Pokemonpages from "./pokemonpages";
import useLocalStorage from "use-local-storage";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Pokemonpages />
      <button onClick={switchTheme}>
        {theme === "light" ? "Dark" : "light"}
      </button>
    </div>
  );
}
export default App;
