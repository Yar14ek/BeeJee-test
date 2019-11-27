import React from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import AddTasks from "./components/AddTasks";
import Filter from "./components/Filter";
import ModalWindow from "./components/ModalWindow";

function App() {
  return (
    <div style={{ width: "1000px", margin: "30px auto" }}>
      <ModalWindow />
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <AddTasks />
        <Filter />
      </div>
      <Lists />
    </div>
  );
}

export default App;
