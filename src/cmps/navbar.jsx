import { NavLink } from "react-router-dom"
import { MdHomeFilled } from 'react-icons/md'
import { TfiSearch } from 'react-icons/tfi'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgAddR } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'

export function Navbar() {
    return (
        <nav className="main-navbar flex column">
            <section className="logo">
                <NavLink to={"/"}>FILTERGRAM</NavLink>
            </section>
            <NavLink to={"/"}><MdHomeFilled /></NavLink>
            <NavLink to={"/search"}><TfiSearch /></NavLink>
            <NavLink to={"/explore"}><FaRegCompass /></NavLink>
            <NavLink to={"/reels"}><BiMoviePlay /></NavLink>
            <NavLink to={"/messages"}><FiSend /></NavLink>
            <NavLink to={"/notifications"}><AiOutlineHeart /></NavLink>
            <NavLink to={"/story/create"}><CgAddR /></NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>

            <button><AiOutlineMenu /></button>

        </nav>
    )
}