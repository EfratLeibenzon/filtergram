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


    let profilePage = user[0]

    useEffect(() => {
        loadStorys()
        loadUsers()
    }, [])

     console.log('profile stories', profilePage)

    return (
        <div className="profile-container">
            <section className='profile-header'>
                <section className="profile-photo">
                    <img src={profilePage.userImgUrl} />
                </section>
                <section className="profile-info">
                    <div className="profile-info-header">
                    <a>{profilePage.userName}</a>
                    <div>
                        <button className="profile-edit-btn">Edit profile</button>
                    </div>
                    </div>
                    <div className="user-info">
                        <ul style={{listStyle: "none"}}>
                            <li>{profilePage.userStories.length} post</li>
                            <li>{profilePage.followers.length} followers</li>
                            <li>{profilePage.following.length} following</li>
                        </ul>
                    </div>
                    <div class="user-name">{profilePage.fullName}</div>
                </section>
            </section>
            {/* <h1>UserDetails</h1> */}
        </div>
    )
}