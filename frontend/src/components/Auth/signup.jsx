import styles from "./signupstyles.module.css";
import image from "../Assets/tech-track.png";
import "./global-auth.css"
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className={styles["signup-page"]}>
        <div className={styles["main-heading"]}>
            <h1>Welcome to</h1>
            <img className={styles.logo} src={image} alt="Tech Track" />
        </div>
        <main className={styles.main}>
            <form className={styles.form} action="" method="POST">
            <div className={styles["main_heading"]}>
                <h2>CREATE ACCOUNT</h2>
            </div>
            <fieldset>
                <label className={styles["name-label"]} id="name-label" htmlFor="name">
                Full Name
                <input
                    className={styles["name-input"]}
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                />
                </label>
            </fieldset>
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
            <fieldset>
                <label className={styles["confirm-label"]}id="confirm-label" htmlFor="confirm-password">
                Confirm Password
                <input
                    className={styles["confirm-input"]}
                    id="confirm-password"
                    type="password"
                    placeholder="Re-enter your password"
                    required
                />
                </label>
            </fieldset>
            <button className={styles.register}>Register</button>
            <p className={styles.account}>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            </form>
        </main>
      </div>
    </>
  );
};

export default Login;
