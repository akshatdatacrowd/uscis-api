const SignUp = () => {
  return (
    <div className="SignUpIndex">
      <div className="SignUpFormContainer">
        <div className="leftSUform">
          <form>
            <h1 id="SUHeading">Sign Up</h1>
            <div className="IFSUContainer">
              <input className="IFSU" type="text" placeholder="Full Name" />
            </div>
            <div className="IFSUContainer">
              <input className="IFSU" type="email" placeholder="E-mail" />
            </div>
            <div className="IFSUContainer">
              <input className="IFSU" type="password" placeholder="Password" />
            </div>
            <div className="IFSUContainer">
              <input
                className="IFSU"
                type="password"
                placeholder="Retype Password"
              />
            </div>
            <div className="IFSUContainer">
              <input className="SUsubmit" type="submit" value="Sign Me Up" />
            </div>
          </form>
        </div>
        <div className="rightSUform">
          <div>
            <button className="LoginSUBtns" id="fbsu">
              Log in with Facebook
            </button>
          </div>
          <div>
            <button className="LoginSUBtns" id="twsu">
              Log in with Twitter
            </button>
          </div>
          <div>
            <button className="LoginSUBtns" id="gosu">
              Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
