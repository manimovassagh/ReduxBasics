import React from "react";
import { Alert } from "react-bootstrap";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container rtl">
      <Alert variant="info" className="w-50 mx-auto text-center mt-5">
        Redux is SO good For managing your Data{" "}
      </Alert>
      <Counter />
    </div>
  );
}

export default App;
