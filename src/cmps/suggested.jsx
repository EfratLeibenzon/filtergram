import { userService } from "../services/user.service";

export function Suggested() {

    const user = userService.getLoggedinUser()?.[0];

    return (
        <div className="suggestions">
            <div className="suggestion-header">
                <div className="suggestion-header-info">
                    <img src={user.userImg.url} style={user.userImg.style} />
                    <div className="suggestion-user-name">
                        <a>{user.userName}</a>
                        <span>{user.fullName}</span>
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