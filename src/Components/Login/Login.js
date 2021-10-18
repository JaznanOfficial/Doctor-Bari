import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
        <InputGroup className="mb-3"/>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        </div>
    );
};

export default Login;