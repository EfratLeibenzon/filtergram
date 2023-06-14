import { userService } from "../services/user.service";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { loadUsers } from '../store/user.actions'

export function Suggested() {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const users = useSelector(storeState => storeState.userModule.users)
    // const user = userService.getLoggedinUser();

    console.log('users from suggested', users[0])

    useEffect(() => {
        loadUsers()
    }, [])

    // {users.map((user)=><p>{user.fullName}</p>)}

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
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAORDGWrDGSbG4N4lf7O7WURlcqqNjbihMgA&usqp=CAU" /></span>
                    <div className="suggestion-user-name">
                        <span className="suggestion">Dimtry Levin</span>
                        <span>DimaLev</span>
                    </div>
                </div>
            </div>
            <div className="suggestion-header">
                <div className="suggestion-header-info">
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWeIxZrWnLc-QyCfO8mp6cYIs554vr5gU6Q&usqp=CAU" /></span>
                    <div className="suggestion-user-name">
                        <span className="suggestion">Lisa S</span>
                        <span>Simpson Girl</span>
                    </div>
                </div>
            </div>
        </div>
    )
}