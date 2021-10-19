import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Register.css'

const Register = () => {
  const {signInUsingGoogle,handleRegistration,handleEmail,handlePassword} = useFirebase();
    return (
        <div className="register">
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bolder fs-50px text-primary">Register</h5>
                <form onSubmit={handleRegistration}>
                  
                
                  <div className="form-floating mb-3">
                    <input onBlur={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid mb-2">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                  </div>
                  <div className="d-grid mb-2">
                    <button onClick={signInUsingGoogle} className="btn btn-google btn-login text-uppercase fw-bold btn-google" type="submit">
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                    </div>
                  
                    <hr className="my-4" />
                    
                    <h5>Already Register? Go to <Link to='/login'>Log in</Link></h5>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;