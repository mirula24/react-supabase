import { RouterProvider } from "react-router";
import "./App.css";
import { route } from "./routes/Router";

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
