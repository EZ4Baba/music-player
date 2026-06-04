import { Outlet } from "react-router-dom";
import styles from "./NestedLayout.module.css";
export default function NestedLayout() {
  return (
    <>
      <Outlet />
      <div className={styles.miniplayer}>
        <h3> Mini Player</h3>
      </div>
    </>
  );
}
