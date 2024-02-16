import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import { Navbar } from "./Page/Navbar/Navbar";
import { Home } from "./Page/HomePage/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Navbar/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
