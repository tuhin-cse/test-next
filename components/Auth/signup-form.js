import React, { useState } from 'react';
import Swal from 'sweetalert2'

function SignupForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleFirstNameChange(e) {
        e.preventDefault();
        setFirstName(e.currentTarget.value);
    }

    function handleLastNameChange(e) {
        e.preventDefault();
        setLastName(e.currentTarget.value);
    }

    function handlePasswordChange(e) {
        e.preventDefault();
        setPassword(e.currentTarget.value);
    }

    function handlePhoneNumberChange(e) {
        e.preventDefault();
        setPhoneNumber(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ( firstName == "" || lastName == "" || password == "" || phoneNumber == "" ) {
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
                        "f_name": firstName,
                        "l_name": lastName,
                        "password": password,
                        "phn_no": phoneNumber
                    })
            };
            fetch('https://example.com/api/user/signup', requestOptions)
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
                    <label htmlFor="exampleInputPassword1">First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={handleFirstNameChange} placeholder="First Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={handleLastNameChange} placeholder="Last Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} onChange={handlePasswordChange} placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone Number</label>
                    <input type="text" className="form-control" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number"/>
                </div>

                <button className="btn btn-primary" onClick={handleSubmit} style={buttonStyle}>Signup</button>
            </form>
        </div>

    )
}

export default SignupForm