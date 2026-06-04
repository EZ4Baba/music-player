import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.jpg";
import { FiLogOut } from "react-icons/fi";
import { MdLibraryMusic, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { TbChartBarPopular } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";

import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <header className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={50} height={50} />
      </div>
      <nav className={styles.navbar}>
        <NavItem
          title="Feed"
          destination="/feed"
          Logo={RiDashboardHorizontalLine}
        />
        <NavItem
          title="Trending"
          destination="/trending"
          Logo={TbChartBarPopular}
        />
        <NavItem title="Player" destination="/player" Logo={FaRegCirclePlay} />
        <NavItem
          title="Favorite"
          destination="/favorites"
          Logo={MdOutlineFavoriteBorder}
        />
        <NavItem title="Library" destination="/library" Logo={MdLibraryMusic} />
      </nav>
      <NavItem title="Log Out" destination="/" Logo={FiLogOut} />
    </header>
  );
}
