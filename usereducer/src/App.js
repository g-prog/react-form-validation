import React, {useState} from "react";
import FormInput from "./components/FormInput";
import './App.css'
function App() {
  const [username, setUsername] = useState("");
  console.log(username)
  return (
    <div className="App">
      <form>
        <FormInput  placeholder="Username" setUsername={setUsername}/>
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name"/>
        <FormInput  placeholder="Occupation"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
