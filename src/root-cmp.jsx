import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import { Navbar } from './cmps/navbar'
import { HomeIndex } from './pages/home-index'
import { Explore } from './pages/explore'
import { Profile } from './pages/profile'
import { Messages } from './pages/messages'
import { Reels } from './pages/reels'
import { StoryEdit } from './cmps/story-edit'
import { userService } from './services/user.service'


export function RootCmp() {
    const [isStoryEdit, setisStoryEdit] = useState(false)

<<<<<<< HEAD
    let user = userService

    return (
        <div className='flex'>
            <Navbar isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} />
            {isStoryEdit && <StoryEdit isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} />}
=======
    const user = userService.getLoggedinUser()?.[0];
    console.log('user iuddddd',user)

    return (
        <div className='flex'>
            <Navbar isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} user={user} />
>>>>>>> 8e52411a01a2c28df63270d8869c2f552b485632

            <main className='main-section'>
                <Routes>
                    <Route element={<HomeIndex />} path="/">
                        {/* <Route element={<StoryDetails path={"/story/:storyId"} />} /> */}
                    </Route>
                    <Route element={<Explore />} path="/explore" />
                    <Route element={<Reels />} path="/reels" />
                    <Route element={<Messages />} path="/messages" />
                    <Route element={<Profile />} path="/profile/:userId" />
                </Routes>
            </main>

        </div>
    )
}

