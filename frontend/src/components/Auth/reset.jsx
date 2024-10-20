export default function Reset() {
    return(
        <>
        <main>
          <form className="form" action="" method="POST">
            <div className="main_heading">
              <h2>RESET PASSWORD</h2>
            </div>
            <fieldset>
              <label id="email-label" for="email">Email<input id="name" type="email" placeholder="Enter your email address" required/></label>
            </fieldset>
          <p className="account"><a href="reset.html">Cancel?</a></p>
          </form>
        </main>
        </>
      )
} 