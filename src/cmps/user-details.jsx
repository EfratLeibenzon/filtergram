import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { loadUsers } from '../store/user.actions'
import { userService } from '../services/user.service'

export function UserDetails() {
    // const user = useSelector(storeState => storeState.userModule.user)
    // const users = useSelector(storeState => storeState.userModule.users)
    // const stories = useSelector(storeState => storeState.storyModule.stories)
    const {id} = useParams()


    return (
        <div className="user-details">
            <h1>UserDetails</h1>
        </div>
    )
}