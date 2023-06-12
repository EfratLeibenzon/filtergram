import { userService } from "../services/user.service";

import { NavLink } from "react-router-dom";

export function Suggested() {

    const user = userService.getLoggedinUser();
    if (!user) return null
    return (
        <div className="suggestions">
            <div className="suggestion-header">
                <div className="suggestion-header-info">
<<<<<<< HEAD
                    <NavLink to={`/profile/${user._id}`}><img src={user.userImg.url} style={user.userImg.style} /></NavLink>
                    <div className="suggestion-user-name">
                        <NavLink to={`/profile/${user._id}`}>     <a>{user.userName}</a></NavLink>
=======
                    <NavLink to={`/profile/${user._id}`}><img src={user.userImg?.url} style={user.userImg?.style} /></NavLink>
                    <div className="suggestion-user-name">
                        <NavLink to={`/profile/${user._id}`}>{user.userName}</NavLink>
>>>>>>> 571bb363f5abe76dd5e4a28f8796c10ebc70c970
                        <span>{user.fullName}</span>
                        {/* <NavLink className="navbar-item-profile" to={`/profile/${user._id}`}><img src={user.userImg.url} style={user.userImg.style} />Profile</NavLink> */}
                    </div>
                </div>
            </div>
            <div className="suggested-options">
                <span>Suggested for you</span>
                <a>See all</a>
            </div>
        </div>
    )
}