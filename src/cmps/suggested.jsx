import { userService } from "../services/user.service";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export function Suggested() {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    // const user = userService.getLoggedinUser();

    return (
        <div className="suggestions">
            <div className="suggestion-header">
                <div className="suggestion-header-info">
                    <NavLink to={`/profile/${user._id}`}><img src={user.userImg?.url} style={user.userImg?.style} /></NavLink>
                    <div className="suggestion-user-name">
                        <NavLink to={`/profile/${user._id}`}>{user.userName}</NavLink>
                        <span>{user.fullName}</span>
                        {/* <NavLink className="navbar-item-profile" to={`/profile/${user._id}`}><img src={user.userImg.url} style={user.userImg.style} />Profile</NavLink> */}
                    </div>
                </div>
            </div>
            <div className="suggested-options">
                <span>Suggested for you</span>
                <a>See all</a>
            </div>
            <div className="suggestion-header">
                <div className="suggestion-header-info">
                    <NavLink to={`/profile/${user._id}`}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAORDGWrDGSbG4N4lf7O7WURlcqqNjbihMgA&usqp=CAU" /></NavLink>
                    <div className="suggestion-user-name">
                        <NavLink to={`/profile/${user._id}`}>Dimtry Levin</NavLink>
                        <span>DimaLev</span>
                    </div>
                </div>
            </div>
            <div className="suggestion-header">
                <div className="suggestion-header-info">
                    <NavLink to={`/profile/${user._id}`}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWeIxZrWnLc-QyCfO8mp6cYIs554vr5gU6Q&usqp=CAU" /></NavLink>
                    <div className="suggestion-user-name">
                        <NavLink to={`/profile/${user._id}`}>Lisa S</NavLink>
                        <span>Simpson Girl</span>
                    </div>
                </div>
            </div>
        </div>
    )
}