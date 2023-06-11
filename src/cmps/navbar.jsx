import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { searchIcon, exploreIcon, homeIcon, reelsIcon, sendIcon, likeIcon, createIcon, moreIcon } from './icons'
import { storyService } from "../services/story.service.local"
import { userService } from "../services/user.service";
import { useState, useEffect } from 'react'


export function Navbar({ isStoryEdit, setisStoryEdit, user }) {

    function onCreate() {
        setisStoryEdit(true)
        // isStoryEdit? document.StoryEdit.classList.remove('hidden') : document.StoryEdit.classList.add('hidden')
        console.log('isStoryEdit', isStoryEdit)
    }

    return (
        <div className="side-bar">
            <section className="logo">
                {/* <NavLink className="navbar-item" to={"/"}>FILTERGRAM</NavLink> */}
                <a>FILTERGRAM</a>
            </section>
            <nav className="main-navbar flex column justify-start">
                <NavLink className="navbar-item-home" to={"/"}><span>{homeIcon}</span><span className="home">Home</span> </NavLink>
                <a className="navbar-item-search"> <span>{searchIcon}</span><span>Search</span></a>
                <NavLink className="navbar-item-explore" to={"/explore"}><span>{exploreIcon}</span><span>Explore</span></NavLink>
                <NavLink className="navbar-item-reels" to={"/reels"}><span>{reelsIcon}</span><span>Reels</span></NavLink>
                <NavLink className="navbar-item-messages" to={"/messages"}><span>{sendIcon}</span><span>Messages</span></NavLink>
                <a className="navbar-item-notifications"><span>{likeIcon}</span><span>Notifications</span></a>
                <a className="navbar-item-create" onClick={onCreate} > <span>{createIcon}</span><span>Create</span></a>
                <NavLink className="navbar-item-profile" to={`/profile/${user._id}`}><img src={user.userImg.url} style={user.userImg.style} />Profile</NavLink>
                {/* <a className="navbar-item-more"><span>{moreIcon}</span><span>More</span></a> */}
                <a className="navbar-item-more"><span>{moreIcon}</span><span>More</span></a>
            </nav>
        </div>
    )
}