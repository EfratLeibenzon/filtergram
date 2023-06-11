import { StoryList } from "../cmps/story-list";
import { UserDetails } from "../cmps/user-details";
import { LoginSignup } from "../cmps/login-signup";
import { useState } from "react";
import { userService } from "../services/user.service";

export function Profile() {
    const [loggedInUser, setUser] = useState(userService.getLoggedinUser())

    function onChangeLoginStatus(loggedInUser) {
        console.log('from header: ', loggedInUser);
        setUser(loggedInUser)
    }

    return (
        <div className="profile-page">
            <UserDetails />
            {/* <section className="user-stories grid">
            </section> */}
                   <LoginSignup onChangeLoginStatus={onChangeLoginStatus} />
        </div>
    )
}