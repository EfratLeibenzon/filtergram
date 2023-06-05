import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="main-navbar flex column">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/search"}>Search</NavLink>
            <NavLink to={"/explore"}>Explore</NavLink>
            <NavLink to={"/reels"}>Reels</NavLink>
            <NavLink to={"/messages"}>Messages</NavLink>
            <NavLink to={"/notifications"}>Notifications</NavLink>
            <NavLink to={"/story/edit"}>Create</NavLink>
            <NavLink to={"/profile"}>Profil</NavLink>
        </nav>
    )
}