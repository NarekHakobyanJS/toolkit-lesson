import React from 'react'
import FirstName from './FirstName'
import LastName from './LastName'
import {setFirstName, setLastName} from "../features/user/userSlice"
import {useDispatch} from "react-redux"

const User = () => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col'>
            <input
                type='text'
                placeholder='First Name'
                onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
            <input
                type='text'
                placeholder='Second Name'
                onChange={(e) => dispatch(setLastName(e.target.value))}
            />
            <div className='flex gap-20 py-5'>
                <div className='flex flex-col'>
                    <div className='flex font-light'>First Name:</div>
                    <div className='flex'>
                        <FirstName />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex font-light'>Last Name:</div>
                    <div className='flex'>
                        <LastName />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User