import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./componants/Routing";
import "./componants/Footer.css";

function App() {
    return (
        <Router>
            <Routing />
        </Router>
    );
}

export default App;