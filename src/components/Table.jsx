import React from "react";

export const Table = ({ list }) => {
  return (
    <div className="userList">
      <ul>
        {list.map((item, i) => {
          return <li key={i}> {item} </li>;
        })}
      </ul>
    </div>
  );
};
