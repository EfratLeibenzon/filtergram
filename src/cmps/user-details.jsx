import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { loadUsers } from '../store/user.actions'
import { loadStories } from '../store/story.actions'
import { userService } from '../services/user.service'

export function UserDetails() {
    const user = useSelector(storeState => storeState.userModule.user)
    const users = useSelector(storeState => storeState.userModule.users)
    const stories = useSelector(storeState => storeState.storyModule.stories)
    const userName = useParams()

    // let loggedInUser = user[0]

    const [loggedInUser, setUser] = useState(...userService.getLoggedinUser())
    console.log('logged in user', loggedInUser)


    useEffect(() => {
        loadStories()
        loadUsers()
    }, [])


    // const profileStories = stories.filter(story => story.by._id === profilePage._id)

    return (
        <div className="profile-container">
            <section className='profile-header'>
                <section className="profile-photo">
                    <img src={loggedInUser.userImg.url} style={loggedInUser.userImg.style} />
                </section>
                <section className="profile-info">
                    <div className="profile-info-header">
                        <a>{loggedInUser.userName}</a>
                        <div>
                            <button className="profile-edit-btn">Edit profile</button>
                        </div>
                    </div>
                    <div className="user-info">
                        <ul style={{ listStyle: "none" }}>
                            <li>{loggedInUser.userStories.length} post</li>
                            <li>{loggedInUser.followers.length} followers</li>
                            <li>{loggedInUser.following.length} following</li>
                        </ul>
                    </div>
                    <div className="user-name">{loggedInUser.fullName}</div>
                </section>
            </section>
        </div>
    )
}