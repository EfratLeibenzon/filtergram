import { NavLink, useNavigate } from "react-router-dom"
import { searchIcon, exploreIcon, homeIcon, reelsIcon, sendIcon, likeIcon, createIcon, moreIcon } from './icons'
<<<<<<< HEAD
import { storyService } from "../services/story.service.local"
=======
import { userService } from "../services/user.service";
>>>>>>> 78b57618f0515f8ffb401416c4822a98772f29ac

const userName = userService.getLoggedinUser()?.[0]?.userName;


export function Navbar({ isStoryEdit, setisStoryEdit }) {

    function onCreate() {
        setisStoryEdit(true)
        console.log('isStoryEdit', isStoryEdit)
    }

    return (
        <nav className="main-navbar flex column justify-start">
            <section className="logo">
                <NavLink className="navbar-item" to={"/"}>FILTERGRAM</NavLink>
            </section>
            <NavLink className="navbar-item" to={"/"}><span>{homeIcon}</span><span>home</span> </NavLink>
            <button className="navbar-item"> <span>{searchIcon}</span><span>search</span></button>
            <NavLink className="navbar-item" to={"/explore"}><span>{exploreIcon}</span><span>explore</span></NavLink>
            <NavLink className="navbar-item" to={"/reels"}><span>{reelsIcon}</span><span>reels</span></NavLink>
            <NavLink className="navbar-item" to={"/messages"}><span>{sendIcon}</span><span>messages</span></NavLink>
            <button className="navbar-item"><span>{likeIcon}</span><span>notifications</span></button>
<<<<<<< HEAD
            <button className="navbar-item" onClick={onCreate} > <span>{createIcon}</span><span>create</span></button>
            <NavLink className="navbar-item" to={"/profile/:userId"}>Profile</NavLink>
=======
            <NavLink className="navbar-item" to={"/story/edit"}> <span>{createIcon}</span><span>create</span></NavLink>
            <NavLink className="navbar-item" to={`/${userName}`}>Profile</NavLink>
>>>>>>> 78b57618f0515f8ffb401416c4822a98772f29ac
            <button className="navbar-item"><span>{moreIcon}</span><span>more</span></button>
        </nav>
    )
}