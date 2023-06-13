import Home from "./Container/Home/Home";
import ContactSupport from "./Components/Contactsupport/ContactSupport";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
     
        <Route exact path="/" Component={Home} />
        <Route path="/contactus" Component={ContactSupport} />
     
    </Router>
  );
}

export default App;
