import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { login } from '../store/user.actions.js'
import { signup } from '../store/user.actions.js'
import { useRef, useState } from 'react'

export function CredentialsForm({ onSubmit, isSignup }) {
const [user, setUser] = useState(userService.getEmptyUser())

    function handleChange({ target }) {
        console.log('target', target.field)
        const { name: field, value } = target
        setUser(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onSubmit(user)
    }

    return (
        <form className="credentials-form" onSubmit={handleSubmit}>
            <input
                className="txt-input"
                type="text"
                name="userName"
                placeholder="Username"
                onChange={handleChange}
                required
                autoFocus
            />
            <input className="txt-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />
            {isSignup && <input
                className="txt-input"
                type="text"
                name="fullName"
                placeholder="Full name"
                onChange={handleChange}
                required
                />}
                <button onClick={()=>userService._createGuest()}>demo user</button>
            <button className="btn log-btn">{isSignup ? 'Signup' : 'Login'}</button>
        </form>
    )
}
