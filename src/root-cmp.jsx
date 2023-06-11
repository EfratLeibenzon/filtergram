import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Navbar } from './cmps/navbar'
import { HomeIndex } from './pages/home-index'
import { Explore } from './pages/explore'
import { Profile } from './pages/profile'
import { Messages } from './pages/messages'
import { Reels } from './pages/reels'
import { StoryEdit } from './cmps/story-edit'
import { StoryDetails } from './cmps/story-details'
import { userService } from './services/user.service'
import { loadUser } from './store/user.actions'


export function RootCmp() {
    const [isStoryEdit, setisStoryEdit] = useState(false)
    const [isStoryDetailsOpen, setIsStoryDetailsOpen] = useState(false)
    const location = useLocation()
    const background = location.state && location.state.background

    const user = userService.getLoggedinUser()?.[0];

    return (
        <div className='flex'>
            <Navbar isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} user={user} />
            {isStoryEdit && <StoryEdit isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} />}
            <main className='main-section'>
                <Routes location={background || location}>
                    <Route element={<HomeIndex setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} />} path="/">
                        <Route element={<StoryDetails path={"/story/:storyId"} />} />
                    </Route>
                    <Route element={<Explore />} path="/explore" />
                    <Route element={<Reels />} path="/reels" />
                    <Route element={<Messages />} path="/messages" />
                    {/* <Route element={<Profile setIsStoryDetailsOpen={setIsStoryDetailsOpen} />} path={'/profile/:userId'} /> */}
                    <Route element={<StoryDetails setIsStoryDetailsOpen={setIsStoryDetailsOpen} isStoryDetailsOpen={isStoryDetailsOpen} />} path={'/StoryDetails/:storyId'} />
                    <Route element={<Profile />} path="/profile/:userId" />
                </Routes>
                {/* {isStoryEdit && <StoryEdit isStoryEdit={isStoryEdit} setisStoryEdit={setisStoryEdit} />} */}
                {/* {isStoryDetailsOpen && <StoryDetails isStoryDetailsOpen={isStoryDetailsOpen} setIsStoryDetailsOpen={setIsStoryDetailsOpen} />}
                {background && (
                    <Routes>
                        <Route path="/StoryDetails/:storyId" element={<StoryDetails />} />
                    </Routes>)} */}

            </main>

        </div >
    )
}

