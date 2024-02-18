import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import { Navbar } from "./Page/Navbar/Navbar";
import { Home } from "./Page/HomePage/Home";
import { Auth } from "./Page/Auth/Auth";

function App() {
  const user  = true;

  return (
    <ThemeProvider theme={darkTheme}>
      {user ? <div>
        <Navbar />
        <Home />
      </div> :
        <Auth />}
    </ThemeProvider>
  );
}

export default App;
