import { Link, useNavigate } from "react-router-dom";
import styles from "./barranavegar.module.css";
import { Logout } from "../Hooks/logout";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { GrSearch } from "react-icons/gr";
export const BarraNavegar = () => {
  const navigate = useNavigate()



  return (
    <ul className={styles.barra_navegar}>
      <Link to={"/auth/search"}>
        <li>
          <GrSearch className={styles.icon_search} />
        </li>
      </Link>
      
    <Link to={"/auth/home"}>
      <li>
        <FiHome className={styles.icon_home}/>
      </li>
    </Link>

    <li onClick={() => navigate(-1)}>
      <RiArrowGoBackFill className={styles.icon_arrowback} />
    </li>
    <Link to={"/"}>
        <li onClick={Logout}>
          <CgLogOut className={styles.icon_logout}/>
        </li>
    </Link>
      
    </ul>
  );
};
