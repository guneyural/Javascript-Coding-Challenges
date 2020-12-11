import React, { useState, useEffect } from "react";
import Article from "./article";
import Data from "./data";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const getThemeFromStorage = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light-theme";
  };

  const [articles, setArticles] = useState(Data);
  const [theme, setTheme] = useState(getThemeFromStorage);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark-theme") {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else if (theme === "light-theme") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else if (theme === "dark-theme") {
      setTheme("light-theme");
    }
  };

  return (
    <div className="container">
      <section className="theme-toggle">
        <h2>Theme Toggler</h2>
        {theme === "light-theme" ? (
          <FaMoon className="theme-icon" onClick={() => changeTheme()} />
        ) : (
          <FaSun className="theme-icon" onClick={() => changeTheme()} />
        )}
      </section>
      {articles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}
    </div>
  );
};

export default App;
