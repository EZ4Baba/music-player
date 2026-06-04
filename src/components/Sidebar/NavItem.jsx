import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
export default function NavItem({ title, destination, Logo }) {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        isActive ? `${styles.nav} ${styles.active}` : styles.nav
      }
    >
      <Logo />
      <h3>{title}</h3>
    </NavLink>
  );
}
