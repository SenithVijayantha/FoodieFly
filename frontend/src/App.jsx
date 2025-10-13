import React, { useState, useEffect } from "react";

import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  // Initialize from local storage or fallback to system / default
  return (
    <div>
      <ThemeToggler />
    </div>
  );
};

export default App;
