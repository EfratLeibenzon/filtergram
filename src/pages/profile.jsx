import { StoryList } from "../cmps/story-list";
import { UserDetails } from "../cmps/user-details";

export function Profile() {

    return (
        <div className="profile-page">
            <UserDetails />
            {/* <section className="user-stories grid">
            </section> */}
        </div>
    )
}