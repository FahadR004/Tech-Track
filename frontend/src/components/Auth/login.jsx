export default function Login() {
    return(
        <>
        <h1>Welcome back!</h1>
        <main>
          <form className="form" action="" method="POST">
            <div className="main_heading">
              <h2>LOGIN PAGE</h2>
              <p className="account">Don't have an account? <a href="login.html">Sign up</a></p>
            </div>
            <fieldset>
              <label id="email-label" for="email">Email<input id="name" type="email" placeholder="Enter your email address" required/></label>
            </fieldset>
            <fieldset>
              <label id="password-label" for="password">Password<input id="password" type="password" placeholder="Enter your password" required/></label>
            </fieldset>
            <button className="register">Sign in</button>
          <p className="account">Forgot Password? <a href="reset.html">Reset</a></p>
          </form>
        </main>
        </>
      )
} 