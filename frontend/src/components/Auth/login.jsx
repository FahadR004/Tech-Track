import styles from "./loginstyles.module.css";
import image from "../Assets/tech-track.png";
import "./global-auth.css"
import { Link } from "react-router-dom";

const Login = () => {
  return ( 
    <>
    <div className={styles["login-page"]}>
        <div className={styles["main-heading"]}>
            <img className={styles.logo} src={image} alt="Tech Track" />
        </div>
        <main className={styles.main}>
            <form className={styles.form} action="" method="POST">
            <div className={styles["main_heading"]}>
                <h2>LOGIN PAGE</h2>
            </div>
            <p className={styles.account}>
                Don't have an account? <Link to="/signup">Sign-up</Link>
            </p>
            <fieldset>
                <label className={styles["email-label"]}id="email-label" htmlFor="email">
                Email
                <input
                    className={styles["email-input"]}
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                </label>
            </fieldset>
            <fieldset>
                <label className={styles["password-label"]} id="password-label" htmlFor="password">
                Password
                <input
                    className={styles["password-input"]}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                />
                </label>
            </fieldset>
            <button className={styles["login-btn"]}>Login</button>
            <p className={styles["reset-password"]}>
                Forgot Password? <Link to="/reset">Reset it</Link>
            </p>
            </form>
        </main>
      </div>
    </>
   );
}
 
export default Login;