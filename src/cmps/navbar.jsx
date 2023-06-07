import { NavLink } from "react-router-dom"
import { MdHomeFilled } from 'react-icons/md'
import { TfiSearch } from 'react-icons/tfi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgAddR } from 'react-icons/cg'
import { SlMenu } from 'react-icons/sl'


export function Navbar() {
    const style = { color: 'black' }
    return (
        <nav className="main-navbar flex column justify-start">
            <section className="logo">
                <NavLink to={"/"}>FILTERGRAM</NavLink>
            </section>
            <NavLink to={"/"}><MdHomeFilled />home</NavLink>
            <NavLink to={"/search"}><TfiSearch />search</NavLink>
            <NavLink to={"/explore"}><FaRegCompass />explore</NavLink>
            <NavLink to={"/reels"}><BiMoviePlay />reels</NavLink>
            <NavLink to={"/messages"}><FiSend />messages</NavLink>
            <NavLink to={"/notifications"}><AiOutlineHeart />notifications</NavLink>
            <NavLink to={"/story/create"}><CgAddR />create</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            <button className="icon-btn"><SlMenu style={style} />more</button>

        </nav>
    )
}