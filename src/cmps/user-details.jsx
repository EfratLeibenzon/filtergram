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

    console.log('usersssss', users)
    console.log('userrrrr', user)
    let profilePage = user[0]


    useEffect(() => {
        loadStories()
        loadUsers()
    }, [])

    
    // const profileStories = stories.filter(story => story.by._id === profilePage._id)
    console.log('profile storiessss',stories)
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
                        <ul style={{ listStyle: "none" }}>
                            <li>{profilePage.userStories.length} post</li>
                            <li>{profilePage.followers.length} followers</li>
                            <li>{profilePage.following.length} following</li>
                        </ul>
                    </div>
                    <div class="user-name">{profilePage.fullName}</div>
                </section>
            </section>
            <div className="posts-menu">
                <a aria-selected="true" role="tab"><div><svg aria-label="" className="posts" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg><span>Posts</span></div></a>
                <a aria-selected="false" role="tab" tabindex="0"><div ><svg aria-label="" class="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg><span style={{ opacity: 0.5 }}>Saved</span></div></a>
                <a aria-selected="false" role="tab" tabindex="0"><div><svg aria-label="" class="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg><span style={{ opacity: 0.5 }}>Tagged</span></div></a>
            </div>
        </div>
    )
}