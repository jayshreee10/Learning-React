import { useState } from "react";
import "../App.css";

function Counter() {
  let buttonStyle = {
    marginTop: "20vh",
    marginRight: "100px",
    marginLeft: "160px",
    borderRadius: "200px",
    height: "100px",
    width: "100px",
    fontSize: "40px",
  };
  const[count, setCount] = useState(0);
  return (
      <div className="Counter" style={{backgroundColor:"black",height:"100vh",textAlign:"center"}}>
        <div className="Text" style={{ color: "white", fontSize: "40vh" }}>
          {count}
        </div>
        <button
          className="subtract"
          style={buttonStyle}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}>
          -
        </button>

        <button
          className="add"
          style={buttonStyle}
          onClick={() => setCount(count + 1)}>
          + 
        </button>

        <button
          className="reset"
          style={{
            marginTop: "20vh",
            marginRight: "100px",
            marginLeft: "160px",
            borderRadius: "200px",
            height: "100px",
            width: "100px",
            fontSize: "20px",
          }}
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
   
  );
}

export default Counter;
