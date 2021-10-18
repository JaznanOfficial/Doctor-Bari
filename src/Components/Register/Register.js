import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register">
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bolder fs-50px text-primary">Register</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name"/>
                    <label for="floatingInput">Your Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid mb-2">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
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