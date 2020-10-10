import React, { useState } from 'react';
import Swal from 'sweetalert2'

function LoginForm() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    function handlePhoneNumberChange(e) {
        e.preventDefault();
        setPhoneNumber(e.currentTarget.value);
    }

    function handlePasswordChange(e) {
        e.preventDefault();
        setPassword(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ( password == "" || phoneNumber == "" ) {
            Swal.fire(
                'Warning',
                'Please fill all fields',
                'warning'
            )
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "phn_no": phoneNumber,
                        "password": password
                    })
            };
            fetch('https://example.com/api/user/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.error === false) {
                        Swal.fire(
                            'Success',
                            data.msg,
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Error',
                            data.err_msg,
                            'error'
                        )
                    }
                });
        }

    }

    let formStyles = {
        width: '50%',
        margin: '30px auto'
    }

    let buttonStyle = {
        padding: "10px 15px"
    }

    return (
        <div className="container">
            <form style={formStyles}>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone Number</label>
                    <input type="text" className="form-control" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} onChange={handlePasswordChange} placeholder="Password"/>
                </div>

                <button className="btn btn-primary" onClick={handleSubmit} style={buttonStyle}>Login</button>
            </form>
        </div>

    )
}

export default LoginForm