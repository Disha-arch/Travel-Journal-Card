import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0);

  const cards = Data.map((items) => {
    return <Card key={items.id} items={items} />;
  });

  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
}

export default App;
