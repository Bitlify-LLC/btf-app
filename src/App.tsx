import NavBar from "./components/NavBar/NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import Footer from "./components/Footer/Footer";

function App() {
  const onMenuItemClick = (value: string) => {};

  return (
    <>
      {/* <NavBar onMenuItemClick={onMenuItemClick} /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
