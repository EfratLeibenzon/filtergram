import { NavLink } from "react-router-dom"
import { searchIcon, exploreIcon, homeIcon, reelsIcon, sendIcon, likeIcon, createIcon, moreIcon } from './icons'




export function Navbar() {
    return (
        <nav className="main-navbar flex column justify-start">
            <section className="logo">
                <NavLink to={"/"}>FILTERGRAM</NavLink>
            </section>
            <NavLink to={"/"}><span>{homeIcon}</span><span>home</span> </NavLink>
            <NavLink to={"/search"}><span>{searchIcon}</span><span>search</span></NavLink>
            <NavLink to={"/explore"}><span>{exploreIcon}</span><span>explore</span></NavLink>
            <NavLink to={"/reels"}><span>{reelsIcon}</span><span>reels</span></NavLink>
            <NavLink to={"/messages"}><span>{sendIcon}</span><span>messages</span></NavLink>
            <NavLink to={"/notifications"}><span>{likeIcon}</span><span>notifications</span></NavLink>
            <NavLink to={"/story/create"}><span>{createIcon}</span><span>create</span></NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            <button className="icon-btn"><span>{moreIcon}</span><span>more</span></button>

        </nav>
    )
}