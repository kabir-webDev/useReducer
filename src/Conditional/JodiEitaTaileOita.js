import React, { useState } from "react";
import "./Walah.css";

function JodiEitaTaileOita() {
  const [name, setName] = useState("First Todo");
  const [sotti, setSotti] = useState(true);
  const keteDao = () => {
    setSotti(false);
  };

  if (sotti) {
    return (
      <>
        <div>
          <h1>
            <span className="hoynai">{name}</span> - Not Done
          </h1>
          <button onClick={keteDao}>Done</button>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>
          <del className="hoise">{name}</del> - Done Bitch
        </h1>
        <button onClick={keteDao}>Mark as Done</button>
      </div>
    );
  }
}

export default JodiEitaTaileOita;
