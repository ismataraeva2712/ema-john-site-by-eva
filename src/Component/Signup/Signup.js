import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
// ==================================================
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    // ======================================================
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value)
    }
    // ======================================================
    if (user) {
        navigate('/')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPass) {
            setError('Your password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }
    return (
        <div className='form-contaainer'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="" id="" required />
                    </div>
                    <p className='error'>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>Allready have an account ? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;