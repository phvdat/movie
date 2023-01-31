import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { theme } from "style/theme-variables";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
