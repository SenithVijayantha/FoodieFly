import React, { useState, useEffect } from "react";

import ThemeToggler from "./components/ThemeToggler";
import Navbar from "./components/Navbar";

const App = () => {
  // Initialize from local storage or fallback to system / default
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
