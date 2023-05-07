import CustomButton from "./conponents/customButton/CustomButton";
import CustomHeader from "./conponents/customHeader/CustomHeader";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Third app</h1>
      <CustomHeader style="italic" text="1. Lorem Ipsum" size="extraLarge" />
      <CustomHeader style="bold" text="2. Lorem Lorem" size="large" />
      <CustomHeader style="normal" text="3. Ipsum Ipsum" size="medium" />
      <CustomButton name="Save" type="primary" />
      <CustomButton name="Cancel" type="warning" />
    </div>
  );
}

export default App;
