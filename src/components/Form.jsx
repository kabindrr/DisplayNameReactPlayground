import React from "react";
import { Display } from "./Display";

import { useState } from "react";

export const Form = ({ addUserInTable }) => {
  const [name, setName] = useState("As you are typing");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUserInTable(name);
  };

  return (
    <>
      <Display name={name} />
      <div
        className="form"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form action="" onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            type="text"
            style={{
              height: "5rem",
              margin: "10px",
              fontSize: "3rem",
              borderRadius: "5px",
            }}
          />
          <button style={{ backgroundColor: "red" }}>Add User</button>
        </form>
      </div>
    </>
  );
};
