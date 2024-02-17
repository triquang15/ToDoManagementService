import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import { Navbar } from "./Page/Navbar/Navbar";
import { Home } from "./Page/HomePage/Home";
import { Auth } from "./Page/Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        {/* <Navbar/>
        <Home/> */}
        <Auth/>
    </ThemeProvider>
  );
}

export default App;
