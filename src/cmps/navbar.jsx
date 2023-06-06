import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="main-navbar flex column">
            <section className="logo">
                <NavLink to={"/"}>FILTERGRAM</NavLink>
            </section>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/search"}>Search</NavLink>
            <NavLink to={"/explore"}>Explore</NavLink>
            <NavLink to={"/reels"}>Reels</NavLink>
            <NavLink to={"/messages"}>Messages</NavLink>
            <NavLink to={"/notifications"}>Notifications</NavLink>
            <NavLink to={"/story/create"}>Create</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>

            <button>more</button>

        </nav>
    )
}