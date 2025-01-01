import React, { useState } from "react";
import "./SignupLoginPage.css";

const SignupLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign Up:", { email, password });
      // Add sign-up logic here
    } else {
      console.log("Login:", { email, password });
      // Add login logic here
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
    // Add Google login logic here
  };

  return (
    <div className="signup-login-page">
      <div className="form-container">
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="toggle-link" onClick={toggleMode}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupLoginPage;
