

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import About from "./component/About";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Router>
       

        <Route>
          <Routes path="/"></Route>
          <Routes path="/Cards" element={Cards }></Route>
          <Routes path="/About" element={About }></Route>
        </Route>
      </Router> */}
       <Header />
      <Router>
        <Routes>
          <Route path="/Cards" element={<Cards /> }></Route>
          <Route path="/About" element={<About /> }></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;