import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Auth/login"
import Signup from "./components/Auth/signup"
import Reset from "./components/Auth/reset"

export default function App() {
  return(
    <>
    <Router>
      <div className="App">
        <div className="content">
            <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/reset" element={<Reset/>}></Route>
              <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}


