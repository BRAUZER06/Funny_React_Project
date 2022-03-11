import React from "react";
import AppV1 from "./AppV1";
import AppV2 from "./AppV2";

const App = () => {
  const [check, setCheck] = React.useState(false);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
        }}
      >
        <input
          checked={check}
          onChange={() => setCheck((check) => !check)}
          type="checkbox"
        />
        <br />
        <span>
          <b> steve.jobs@example.com</b>
          <br /> <b>password</b>{" "}
        </span>
      </div>




      {check ? <AppV1 /> : <AppV2 />}
    </div>
  );
};

export default App;
