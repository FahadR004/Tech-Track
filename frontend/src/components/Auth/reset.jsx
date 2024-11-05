import styles from "./resetstyles.module.css";
import "./global-auth.css"
import { Link } from "react-router-dom";


const Reset = () => {
    return(
      <>
      <div className={styles["reset-page"]}>
          <main className={styles.main}>
              <form className={styles.form} action="" method="POST">
              <h2>RESET PASSWORD</h2>
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
              <button className={styles["reset-btn"]}>Reset</button>
              <p className={styles["cancek"]}>
                  <Link to="/login">Cancel?</Link>
              </p>
              </form>
          </main>
        </div>
      </>
      )
} 

export default Reset;