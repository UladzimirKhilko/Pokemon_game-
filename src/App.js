import { useState } from "react";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";

const App = () => {
  const [page, setPage] = useState("app");
  const handleChangePage = () => {
    console.log("####:<App/>");
    setPage("game");
  };
  const handleReturnHomePage = () => {
    setPage("app");
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage onReturnHomePage={handleReturnHomePage} />;
    default:
      return <HomePage />;
  }
};

export default App;
