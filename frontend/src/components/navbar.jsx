import styles from "./navbarstyles.module.css";
import image from "../components/Assets/tech-track-white.png";
import { Link } from "react-router-dom";
import "../components/Auth/global-auth.css"


const Navbar = () => {
    return ( 
        <>
                <div className={styles.ul}>
                    <img className={styles.logo} src={image} alt="Tech Track Logo" />
                    <div><Link className={styles.homepage} to="/homepage" >Home</Link></div>
                    <div><Link className={styles.roadmap} to="/roadmaps">Roadmaps</Link></div>
                    <div><Link className={styles.courses} to="/courses">Courses</Link></div>
                    <Link className={styles["logout-link"]} to="/">
                        <button className={styles.logout}>
                        Logout
                        </button>
                    </Link>
                </div>
                
        </>
     );
}
 
export default Navbar;