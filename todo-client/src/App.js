import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import { Navbar } from "./Page/Navbar/Navbar";
import { Home } from "./Page/HomePage/Home";
import { Auth } from "./Page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./ReduxToolKit/AuthSlice";
import { useEffect } from "react";
import { fetchTasks } from "./ReduxToolKit/TodoSlice";

function App() {
  const dispatch = useDispatch();
  const {auth} = useSelector(store => store)

  useEffect(() => {
      dispatch(fetchTasks({}));
      dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? <div>
        <Navbar />
        <Home />
      </div> :
        <Auth />}
    </ThemeProvider>
  );
}

export default App;
