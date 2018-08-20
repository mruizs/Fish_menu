import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store{"'"}s inventory.</p>
    <button className="twitter" onClick={() => props.authenticate("Email")}>
      Log In With Your eMail
    </button>
    <button className="facebook" onClick={() => props.authenticate("Google")}>
      Log In With Google
    </button>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
