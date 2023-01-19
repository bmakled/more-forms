import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };


    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:  </label>
                    <input type='text' onChange={(e) => setFirstname(e.target.value)}></input>
                </div>
                {firstname.length<2 && firstname.length>0 ? (
                    <p>First Name must be at least 2 characters</p>
                ):null}
                <div>
                    <label>Last Name: </label>
                    <input type='text' onChange={(e) => setLastname(e.target.value)}></input>
                </div>
                {lastname.length<2 && lastname.length>0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ):null}
                <div>
                    <label>Email: </label>
                    <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                {email.length<5  ? (
                    <p>Email must be at least 5 characters</p>
                ):null}
                <div>
                    <label>Password: </label>
                    <input type='text' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {password.length<8  ? (
                    <p>Password must be atleast 8 characters</p>
                ):null}
                <div>
                    <label>Confirm Password: </label>
                    <input type='text' onChange={(e) => setConfirmpassword(e.target.value)}></input>
                </div>
                {confirmpassword !== password ? (
                    <p>Passwords must match</p>
                ):null}
            </form>
            <div>
                <h3>Form Data</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </>
    )
}
export default UserForm