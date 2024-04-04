import { useState } from "react";
import "./App.css";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          alert("Hi");
        }}
      >
        Click me !!
      </Button>
      <div></div>
      <p className="">
        Click on the Vite and React logos to learn more thanh dien
      </p>
    </>
  );
}
export default App;
