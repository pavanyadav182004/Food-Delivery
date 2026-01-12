
import { useState } from "react"
import "./Login.css"
import {assets} from '../../assets/assets'

export default function Login({setShowLogin}) {
    const [currState, setCurrState] = useState("Login")
    return (
        <>
            <div className="login">

                <form action="" className="login-container">
                    <div className="login-title">
                        <h2>{currState}</h2>
                        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="close" />
                    </div>
                    <div className="login-inputs">
                        {currState==="Login"?<></>:  <input type="text" placeholder="Your Name" required /> }
                      
                        <input type="email" placeholder="Your Email" required />
                        <input type="password" placeholder="Your Password" required /> <br /><br />
                    </div>
                    <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
              <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the team of use & privacy policy.</p>
              </div>
              {currState==="Login"
              ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
              <p>Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
               }
             
                </form>
            </div>
        </>
    )
}