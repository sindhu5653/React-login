import { useState, useEffect, useRef, useCallback } from "react";
import "./LoginPage.css";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[submit,setSubmit]=useState(false);

    console.log("Email connected",email);
    console.log("Password connected",password);
    
    

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const handleClick = useCallback((e) => {
        e.preventDefault();
        if (email && password) {
            setSubmit(true);
            console.log("Login:", { email, password });
        } 
        else {
            setSubmit(false);
            alert("Please Enter Email and Password.");
        }
    }, [email, password]);

    return (
        <div>
            <form onSubmit={handleClick} className="login">
                <div>
                    <input ref={emailRef} type="email" value={email} placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div>
                    <input type="password" value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>
                <p>{submit}</p>
            </form>

        </div>
    )

}
export default Login;