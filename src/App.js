import React from "react";
import "./App.css";
import { useState } from "react";
import TextHidden from "./component/Delete/TextHidden";
import Fetch from "./component/FetchData/Fetch";
import ComponentA from "./ContextComponent/ComponentA";
import ComponentB from "./ContextComponent/ComponentB";
import { UserContext } from "./ContextComponent/UserContext";
import ComponentE from "./ContextComponent/ComponentE";
import ReducerPrac from "./ReducerPrac";
import Another from "./component/Another.JS";

function App() {
  return (
    <div className="App">
      {/* <TextHidden text={"This is awesome. This is cool. This is great great greatness. This is fucking awesome. This is cool."} maxlength={11}/> */}
      {/* <Fetch/> */}
      {/* Text Loading...
        <UserContext.Provider value="This is from Component h">
          <ComponentA/>
          <ComponentB/> */}
      {/* <ComponentE/> */}
      {/* </UserContext.Provider> */}
      <h1>This is Context API</h1>
      <Another />
      <ReducerPrac />
    </div>
  );
}

export default App;
