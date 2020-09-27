import React, { useEffect, useState } from "react";

function ComponentD() {
  const [user, setUser] = useState();
  useEffect(() => {
    const BASE_URL = "";
    fetch(BASE_URL)
      .then((data) => data.json())
      .then((res) => setUser(res));
  });
  return (
    <div>
      <h1>This is component D</h1>
    </div>
  );
}

export default ComponentD;
