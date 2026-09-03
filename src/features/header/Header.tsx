import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import useTheme from "../../hooks/useTheme";
import styles from "./header.module.css";
import type { HeaderPathOptions } from "./types";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";

function Header() {
  const { theme, isDark, toggleTheme } = useTheme();

  const nav = useNavigate();
  const { pathname, hash } = useLocation();

  const handleNavigation = (path: HeaderPathOptions) => {
    return nav(path);
  };
  const activePath = getActiveHeaderPath(pathname, hash);

  return (
    <div className={styles.header}>
      <div className={styles.innerWrapper}>
        <Logo size={"small"} style={styles.logo} />
        <DesktopMenu
          handleNavigation={handleNavigation}
          theme={theme}
          isDark={isDark}
          toggleTheme={toggleTheme}
          activePath={activePath}
        />
        <MobileMenu
          handleNavigation={handleNavigation}
          theme={theme}
          isDark={isDark}
          toggleTheme={toggleTheme}
          activePath={activePath}
        />
      </div>
    </div>
  );
}

export default Header;

function getActiveHeaderPath(
  path: string,
  hash: string,
): HeaderPathOptions | null {
  const pathWithHash = path + hash;
  if (pathWithHash === "/") return pathWithHash as HeaderPathOptions;
  if (pathWithHash === "/#timeline") return pathWithHash as HeaderPathOptions;
  if (pathWithHash === "/projects") return pathWithHash as HeaderPathOptions;
  return null;
}
