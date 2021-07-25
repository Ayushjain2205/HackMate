import "./App.css";
import Sidebar from "./sidebar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Tutorials from "./pages/tutorials";
import APIs from "./pages/apis";
import Frameworks from "./pages/frameworks";
import Analytics from "./pages/analytics";
import Colors from "./pages/colors";
import Assets from "./pages/assets";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div
        className='App'
        style={{
          display: "flex",
          height: "100vh",
          flexShrink: "0",
          flexGrow: "1",
          overflow: "hidden",
        }}
      >
        <Sidebar />
        <Switch>
          <Route exact path='/tutorials' render={(props) => <Tutorials />} />
          <Route exact path='/apis' render={(props) => <APIs />} />
          <Route exact path='/frameworks' render={(props) => <Frameworks />} />
          <Route exact path='/analytics' render={(props) => <Analytics />} />
          <Route exact path='/colors' render={(props) => <Colors />} />
          <Route exact path='/assets' render={(props) => <Assets />} />
          <Route exact path='/' render={(props) => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
