import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const [list, setList] = useState([]);

  const addUserInTable = (name) => {
    setList([...list, name]);
  };

  return (
    <>
      <div className="wrapper" style={{ display: "flex" }}>
        <div
          className="userList"
          style={{
            boxShadow: "0 0 10px 0  gray",
            fontSize: "2rem",
            padding: "20px",
          }}
        >
          {/* <div className="display">{name}</div> */}

          <Form addUserInTable={addUserInTable} />
          <hr />
          <Table list={list} />
        </div>
      </div>
    </>
  );
}

export default App;
