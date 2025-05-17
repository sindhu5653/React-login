import { useState, useEffect, useRef } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    console.log("Logging:", { email, password });
    setSuccess(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" value={email}  placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

          <br/>

        <input type="password" value={password} placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" >
          Login
        </button>

        {error && <p>{error}</p>}

        {success && <p>Login successful!</p>}
      </form>
    </div>
  );
}

export default LoginForm;
