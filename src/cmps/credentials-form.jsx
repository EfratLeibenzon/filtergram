import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { login } from '../store/user.actions.js'
import { signup } from '../store/user.actions.js'
import { useRef, useState } from 'react'

export function CredentialsForm({ onSubmit, isSignup }) {

    const [user, setUser] = useState(userService.getEmptyUser())
    console.log('user12345', user)

    function handleChange({ target }) {
        console.log('target', target)
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
            <button className="btn log-btn">{isSignup ? 'Signup' : 'Login'}</button>
        </form>
    )
}
