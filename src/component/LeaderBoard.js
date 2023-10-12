import React, { useState } from "react";
import dataLs from "../DataLs";
const LeaderBoard = () => {
  const [player, setPlayer] = useState(dataLs.list);
  const ascHandler = (item) => {
    const asc = [...player].sort((a, b) => a[item] - b[item]);
    setPlayer(asc);
  };

  const ascNameHandler = () => {
    const asc = [...player].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setPlayer(asc);
  };

  return (
    <div>
      <h1>LeaderBoard</h1>

      <tr>
        <th onClick={() => ascNameHandler("name")}>Name</th>
        <th onClick={() => ascHandler("age")}>Age</th>
        <th onClick={() => ascHandler("score")}>Score</th>
      </tr>
      {player.map((players, index) => (
        <tr key={index}>
          <td>{players.name}</td>
          <td>{players.age}</td>
          <td>{players.score}</td>
        </tr>
      ))}
    </div>
  );
};

export default LeaderBoard;
