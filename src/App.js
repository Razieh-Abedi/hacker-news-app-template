import React from "react";
import {AppProvider} from "./context";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

function App() {
  return (
    <>
    <AppProvider>
    <SearchForm/>
    <Buttons/>
    <Stories/>
    </AppProvider>
    </>
  );
}

export default App;
