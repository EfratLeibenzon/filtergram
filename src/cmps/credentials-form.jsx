import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { login } from '../store/user.actions.js'
import { signup } from '../store/user.actions.js'
import { useState } from 'react'

export function CredentialsForm({ onSubmit, isSignup }) {

    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onSubmit(credentials)
    }

    return (
        <form className="credentials-form" onSubmit={handleSubmit}>
            <input
                className="txt-input"
                type="text"
                name="username"
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
                name="fullname"
                placeholder="Full name"
                onChange={handleChange}
                required
            />}
            <a className="btn log-btn">{isSignup ? 'Signup' : 'Login'}</a>
        </form>
    )
}
