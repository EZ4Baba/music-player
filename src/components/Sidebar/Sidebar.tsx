import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <header className={styles.sidebar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active}` : styles.nav
        }
      >
        <h3>Home</h3>
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active}` : styles.nav
        }
      >
        <h3>Trending</h3>
      </NavLink>
      <NavLink
        to="/library"
        className={({ isActive }) =>
          isActive ? `${styles.nav} ${styles.active}` : styles.nav
        }
      >
        <h3>Library</h3>
      </NavLink>
    </header>
  );
}
