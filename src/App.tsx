import { RouterProvider } from "react-router-dom";
import { Providers } from "./config/providers";
import { router } from "./config/router";
import "./App.css";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
