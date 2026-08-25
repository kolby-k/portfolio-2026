import { Outlet, useLocation } from "react-router-dom";
import Header from "../features/header/Header";
import ScrollHandler from "../config/ScrollHandler";

function AppLayout() {
  const location = useLocation();
  // animate page transition for basePath changes
  const basePath = location.pathname.split("/").filter(Boolean)[0] ?? "home";
  return (
    <>
      <ScrollHandler />
      <Header />

      <main>
        <div key={basePath} className="page-transition">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
