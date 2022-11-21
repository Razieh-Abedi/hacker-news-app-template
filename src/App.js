import React from "react";
import { AppProvider } from "./context";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

function App() {
  return (
    <>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
      <footer className="footer">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" footer-link"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </footer>
    </>
  );
}

export default App;
