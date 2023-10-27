import React from "react";

const Signup = () => {
  return (
    <div className="ui main">
      <div className="ux container center">
      <h1 align="center"> Sign up </h1>
        <div className="ux Name">
          <input type="text" placeholder="Name" id="1" />
        </div>
        <div className="ux Email">
          <input type="email" placeholder="Email" id="1" />
        </div>
        <div className="ux Password">
          <input type="password" placeholder="Password" id="1" />
        </div>
      </div>
      <div className='button container'>
       <div className='submit container'>
          <button className="submit"> sign up </button>
      </div>
      <div className='login conatiner'>
          <button className="submit"> login </button>
        </div>        
      </div>
    </div>
  );
};

export default Signup;