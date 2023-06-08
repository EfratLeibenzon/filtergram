import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { loadUsers } from '../store/user.actions'
import { loadStorys } from '../store/story.actions'
import { userService } from '../services/user.service'

export function UserDetails() {
    const user = useSelector(storeState => storeState.userModule.user)
    const users = useSelector(storeState => storeState.userModule.users)
    const stories = useSelector(storeState => storeState.storyModule.stories)
    const userName = useParams()


    let userPage = user[0]

    useEffect(() => {
        loadStorys()
        loadUsers()
    }, [])


    return (
        <div className="user-details">
            <section className='profile-header'>
                <section className="profile-photo">
                    <img src={userPage.userImgUrl} />
                </section>
                <section className="profile-info">
                    <a>{userPage.userName}</a>
                </section>
            </section>
            {/* <h1>UserDetails</h1> */}
        </div>
    )
}