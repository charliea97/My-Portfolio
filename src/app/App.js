import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
