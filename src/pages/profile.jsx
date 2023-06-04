import { StoryList } from "../cmps/story-list";
import { UserDetails } from "../cmps/user-details";

export function Profile() {

    return (
        <div className="profile">
            <h1>Hi from Profile</h1>
            <UserDetails />
            <section className="user-stories grid">
                {/* <StoryList /> */}
            </section>
        </div>
    )
}