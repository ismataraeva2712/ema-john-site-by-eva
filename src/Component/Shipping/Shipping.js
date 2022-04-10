import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    // ============================================
    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleUserShipping = event => {

    }
    return (<>



        <div className='form-contaainer'>
            <div>
                <h2 className='form-title'> shipping Information</h2>
                <form onSubmit={handleUserShipping}>

                    <div className='input-group'>
                        <label htmlFor="Your Name">Your Name</label>
                        <input onBlur={handleNameBlur} type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleAddressBlur} type="password" name="" id="" required />
                    </div>


                    <input className='form-submit' type="submit" value="Add Shipping" required />
                </form>
            </div>
        </div>
    </>
    );
};

export default Shipping;