import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles.css"
import image from "./components/Assets/tech-track.png"

export default function App() {
  return(
    <>
    <div className="main-heading">
      <h1>Welcome to</h1>
      <img className="logo" src={image} alt="Tech Track"/>
    </div>
    <main>
      <form className="form" action="" method="POST">
        <div className="main_heading">
          <h2>CREATE ACCOUNT</h2>
        </div>
        <fieldset>
            <label id="name-label" for="name">Full Name<input id="name" type="text" placeholder="Enter your full name" required/></label>
        </fieldset>
        <fieldset>
          <label id="email-label" for="email">Email<input id="name" type="email" placeholder="Enter your email address" required/></label>
        </fieldset>
        <fieldset>
          <label id="password-label" for="password">Password<input id="password" type="password" placeholder="Enter your password" required/></label>
        </fieldset>
        <fieldset>
            <label id="confirm-label" for="confirm-password">Confirm Password<input id="confirm-password" type="password" placeholder="Re-enter your password" required/></label>
        </fieldset>
        <button className="register">Register</button>
      <p className="account">Already have an account? <a href="login.html">Login</a></p>
      </form>
    </main>
    </>
  )
}


